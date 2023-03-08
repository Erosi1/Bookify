<template>
  <main>
    <div class="container-fluid c-section">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-spacing-top-medium"></div>
          <h2>Profile Page</h2>

          <form>
           <!--Name-->
<div class="a-spacing-top-medium">
  <label>Name</label>
  <input class="a-input-text" style="width: 100%" v-model="data.name" :placeholder="$auth.$state.user.name"/>
</div>
<!--Email-->
<div class="a-spacing-top-medium">
  <label>Email</label>
  <input class="a-input-text" style="width: 100%" v-model="data.email" :placeholder="$auth.$state.user.email"/>
</div>
<!--Password-->
<div class="a-spacing-top-medium">
  <label>Password</label>
  <input class="a-input-text" style="width: 100%" v-model="data.password" />
</div>
            <!--Button -->
            <hr>
            <div class="a-spacing-top-large">
                <span class="a-button-register">
                  <span class="a-button-inner">
                    <span class="a-button-text" @click="onUpdateProfile">Update Profile</span>
                  </span>
                </span>
              </div>
              <div class="a-spacing-top-large">
                <span class="a-button-register">
                  <span class="a-button-inner">
                   <span class="a-button-text" @click="onLogout">Logout</span>
                  </span>
                </span>
              </div>
            </form>
            <br>
          </div>
        </div>
        <div class="col-sm-3"></div>
      </div>

  </main>
</template>

<script>
export default {
  data() {
  return {
    data: {
      name: "",
      email: "",
      password: ""
    }
  };
},
   methods: {
   async onUpdateProfile() {
  try {
    let response = await this.$axios.$put("/api/auth/user", this.data);
    if (response.success) {
      this.data.name = "";
      this.data.email = "";
      this.data.password = "";
      await this.$auth.fetchUser();
    }
  } catch (error) {
    console.log(error);
  }
},
  async onLogout() {
      await this.$auth.logout();


    }
}
}

</script>
