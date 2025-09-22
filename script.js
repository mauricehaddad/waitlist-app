import { createClient } from '@supabase/supabase-js'

// Supabase credentials
const SUPABASE_URL = 'https://vrjaagjafzlkntdrqsuw.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyamFhZ2phZnpsa250ZHJxc3V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1NjIzMjIsImV4cCI6MjA3NDEzODMyMn0.We8rwTSHSOschZxP1nmu8K34KvWU3UtuFElo99qc4Ag'

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signup-form')
  const status = document.getElementById('status')

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const name = form.elements['name'].value
    const email = form.elements['email'].value

    const { data, error } = await supabase
      .from('signups')
      .insert([{ name, email }])

    if (error) {
      console.error(error)
      status.textContent = 'Something went wrong. Please try again.'
    } else {
      status.textContent = 'Thanks for signing up!'
      form.reset()
    }
  })
})
