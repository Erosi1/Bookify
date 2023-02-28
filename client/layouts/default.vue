<template>
<div>
  <Navbar/>
  <Index/>
  <Footer/>
</div>




</template>

<script>
import Index from '~/pages/index'
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
export default {
  components: {
 Navbar,
 Footer,
  Index
},
}


</script>

