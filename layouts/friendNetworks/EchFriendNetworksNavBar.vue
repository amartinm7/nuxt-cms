<template>
  <div v-if="true">
    <a
      href="https://www.castellana100bicishop.com/"
      class="uk-link-reset"
      :alt="$t('friendNetworkCastellana100')"
      :uk-tooltip="$t('friendNetworkCastellana100')"
    >
      <span
        :alt="$t('friendNetworkCastellana100')"
        :uk-tooltip="$t('friendNetworkCastellana100')"
      >
        <img
          class="uk-align-center ech-basic"
          src="../../assets/friendNetworks/castellana100bicishop.png"
          :alt="$t('friendNetworkCastellana100')"
          :uk-tooltip="$t('friendNetworkCastellana100')"
          loading="lazy"
          style="width:50%"
        />
      </span>
    </a>
  </div>
</template>
<script>
export default {
  name: 'EchFriendNetworksNavBar'
}
</script>
