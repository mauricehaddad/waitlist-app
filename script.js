import { createClient } from '@supabase/supabase-js'

// Supabase credentials (public anon key for browser)
const supabaseUrl = 'https://vrjaagjafzlkntdrqsuw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyamFhZ2phZnpsa250ZHJxc3V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1NjIzMjIsImV4cCI6MjA3NDEzODMyMn0.We8rwTSHSOschZxP1nmu8K34KvWU3UtuFElo99qc4Ag'

const supabase = createClient(supabaseUrl, supabaseKey)

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
    console.log({ data, error }) // always log for debugging

    if (error) {
      console.error(error)
      status.textContent = 'Something went wrong. Please try again.'
    } else {
      status.textContent = 'Thanks for signing up!'
      form.reset()
    }
  })
})
n