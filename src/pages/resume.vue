<script setup lang="ts">
import UiPageTitle from '~/components/Ui/UiPageTitle.vue';
import ResumeTimeline from '~/components/Resume/ResumeTimeline.vue';
import ResumeSkills from '~/components/Resume/ResumeSkills.vue';

const resumeStore = useResumeStore();

const { fetchTimelineItems } = resumeStore;

await fetchTimelineItems();
</script>

<template>
  <div>
    <ui-page-title>
      {{ $t('title.resume') }}
    </ui-page-title>

    <resume-timeline />

    <resume-skills />
  </div>
</template>
