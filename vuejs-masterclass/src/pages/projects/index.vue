<script setup lang="ts">
  import {supabase as db} from '@/lib/supabaseClient.ts'

  (async ()=>{
    const { data, error } = await db
      .from('projects')
      .select();
    if(error) {
      console.error('Error fetching projects:', error)
    } else {
      console.log('Projects:', data)
    }
  })()

</script>

<template>
  <div>
    <h1>Projects Page</h1>
    <RouterLink to="/">home</RouterLink>
  </div>
</template>
