import { NextResponse } from 'next/server'
import { projects, profile } from '@/data/projects'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    // Attempt to fetch projects and profile from Supabase if configured,
    // otherwise fallback to static local data from src/data/projects.ts
    const hasSupabaseConfig = Boolean(
      process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
    )

    let supabaseProjects = null
    let supabaseProfile = null

    if (hasSupabaseConfig) {
      const { data: projData, error: projError } = await supabase.from('projects').select('*')
      if (projError) {
        console.error('Supabase projects error:', projError)
      } else if (projData && projData.length > 0) {
        supabaseProjects = projData
      }

      const { data: profData, error: profError } = await supabase.from('profile').select('*').single()
      if (profError) {
        console.error('Supabase profile error:', profError)
      } else if (profData) {
        supabaseProfile = profData
      }
    }

    return NextResponse.json({
      projects: supabaseProjects || projects,
      profile: supabaseProfile || profile,
      source: supabaseProjects ? 'supabase' : 'local'
    })
  } catch (error) {
    console.error('Error fetching data:', error)
    return NextResponse.json(
      { error: 'Failed to fetch content', projects, profile, source: 'local' },
      { status: 500 }
    )
  }
}
