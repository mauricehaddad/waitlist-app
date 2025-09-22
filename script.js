import { createClient } from '@supabase/supabase-js'

// Supabase credentials

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://vrjaagjafzlkntdrqsuw.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
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

    if (error) {
      console.error(error)
      status.textContent = 'Something went wrong. Please try again.'
    } else {
      status.textContent = 'Thanks for signing up!'
      form.reset()
    }
  })
})
