<template>
<v-layout row justify-center align-center>

<GmapMap
  :center="center"
  :zoom="9"
  map-type-id="terrain"
  style="width: 500px; height: 300px"
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
  />
</GmapMap>

</v-layout>
</template>

<script>
export default {
  data() {
    return {
      markers: [
        {position: { lng: 134.8, lat: 34.9 }},
        {position: { lng: 135.6, lat: 34.9 }}
      ],
      center: {lat:34.8, lng:135.2}
    };
  }
};
</script>
