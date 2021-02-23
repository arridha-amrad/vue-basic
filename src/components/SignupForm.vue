<template>
  <h1>Signup</h1>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="email">Email</label>
      <input id="email" v-model="email" />
    </div>
    <div class="form-group">
      <label for="username">Username</label>
      <input id="username" v-model="username" />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input id="password" type="password" v-model="password" />
    </div>
    <div class="form-group">
      <label>Role</label>
      <select v-model="role">
        <option value="designer">Web Designer</option>
        <option value="developer">Web Developer</option>
      </select>
    </div>
    <div class="form-terms">
      <input type="checkbox" v-model="terms" />
      <label>accept term and condition</label>
    </div>

    <div class="form-group">
      <label for="skills">Skills</label>
      <input id="skills" type="text" @keyup="addSkill" v-model="tempSkill" />
      <div v-for="skill in skills" :key="skill" class="pill">
        <span @click="deleteSkill(skill)">{{ skill }}</span>
      </div>
    </div>

    <button class="btn-submit">Submit</button>
  </form>

  <p>Email : {{ email }}</p>
  <p>Username : {{ username }}</p>
  <p>Password : {{ password }}</p>
  <p>Role : {{ role }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      username: "",
      password: "",
      role: "",
      terms: false,
      tempSkill: "",
      skills: [],
      passwordError: "",
      usernameError: "",
    };
  },
  methods: {
    handleSubmit() {
      if (this.password.length < 5) {
        this.passwordError = "Password too short";
      }
      if (this.username.trim() === "") {
        this.usernameError = "Username is required";
      }
      console.log("username : ", this.username);
      console.log("email : ", this.email);
      console.log("password : ", this.password);
      console.log("role : ", this.role);
      console.log("term accepted ? : ", this.terms);
      console.log("skills : ", this.skills);
    },
    addSkill(e) {
      if (e.key === "," && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          let skill = this.tempSkill.replace(/[,]/g, "");
          this.skills.push(skill);
        }
        this.tempSkill = "";
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((val) => val !== skill);
    },
  },
};
</script>

<style scoped>
.btn-submit {
  width: 100%;
  background-color: #73cf27;
  color: #fff;
  font-weight: 700;
  transition: transform 0.2s ease-in;
}
.btn-submit:hover {
  background-color: #79ee19;
  transform: translateY(-2px);
}
.pill {
  display: inline;
}
.pill span {
  padding: 2px 10px;
  background-color: rgb(233, 74, 62);
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  margin-right: 10px;
  border-radius: 10px;
  cursor: pointer;
}
h1 {
  color: #fafafa;
  font-size: 22px;
  line-height: 2;
}
form {
  display: block;
  margin: 0 auto;
  padding: 10px 0;
  width: 400px;
  background-color: #fafafa;
}

.form-group {
  text-align: start;
  margin: 0 20px 10px;
}

label {
  color: rgb(85, 85, 85);
  font-size: 1rem;
  font-weight: 700;
}

input {
  height: 30px;
  margin: 10px 0 20px;
  padding: 5px 10px;
  width: 100%;
  outline: none;
  border: 1px solid #8e8e8e;
}

input[type="checkbox"] {
  width: 16px;
  border: 1px solid rgb(87, 87, 87);
  margin-right: 10px;
  margin-top: 18px;
}

.form-terms {
  margin-top: 20px;
  display: flex;
  align-items: center;
  margin: 0 20px;
  height: 50px;
}
</style>
