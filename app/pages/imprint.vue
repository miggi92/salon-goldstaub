<script setup lang="ts">
import { appName } from '../../constants'
</script>

<template>
  <UPage>
    <UPageHeader title="Impressum" />
    <UPageBody>
      <p>
        Angaben gemäß §5 TMG(<ULink to="https://www.gesetze-im-internet.de/tmg/__5.html">
          Telemediengesetz
          (TMG) - § 5 Allgemeine Informationspflichten
        </ULink>)
      </p>
      <br>
      <div>
        <h2 class="text-primary">
          {{ appName }}
        </h2>
        <p>Elena Köse</p>
        <p>Maybachstraße 22</p>
        <p>74211 Leingarten</p>
        <ULink to="https://goldstaub-heilbronn.de" class="text-primary" target="_blank">
          www.goldstaub-heilbronn.de
        </ULink>
      </div>
      <br>
      <div>
        <h2 class="text-primary">
          Diese Webseite wird betreut von
        </h2>
        <p>MGM12</p>
        <p>Stuttgarter Straße 70</p>
        <p>74211 Leingarten</p>
        <ULink to="https://mgm12.dev" class="text-primary" target="_blank">
          www.mgm12.dev
        </ULink>
      </div>
      <br>

      <div>
        <ContentDoc path="/imprint" />
      </div>
    </UPageBody>
  </UPage>
</template>
