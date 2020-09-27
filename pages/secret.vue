<template>
  <div>
    <h1>This is secret info</h1>
  </div>
</template>

<script>
import { getUserFromCookie } from "@/helpers";
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  asyncData({ req, redirect }) {
    if (process.server) {
      const user = getUserFromCookie(req);
      console.log("user");
    } else {
      let user = firebase.auth().currentUser;
      if (!user) {
        redirect("/login");
      }
    }
  }
};
</script>

<style>
</style>
