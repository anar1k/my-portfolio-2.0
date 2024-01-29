<script setup lang="ts">
import UiPageTitle from '~/components/Ui/UiPageTitle.vue';
import ResumeTimeline from '~/components/Resume/ResumeTimeline.vue';
import ResumeSkills from '~/components/Resume/ResumeSkills.vue';
</script>

<template>
  <div>
    <ui-page-title>
      resume page
    </ui-page-title>

    <resume-timeline />

    <resume-skills />
  </div>
</template>
