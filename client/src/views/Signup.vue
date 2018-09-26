<template>
    <section>
        <h1>Signup</h1>

        <div v-if="errorMessage" class="alert alert-warning" role="alert">
            {{ errorMessage}}
        </div>

        <form @submit.prevent="signup">
            <div class="form-group">
                <label for="username">Username</label>
                <input
                    v-model="user.username"
                    type="text"
                    class="form-control"
                    id="username" aria-describedby="usernameHelp"
                    placeholder="Enter username" required>
                <small id="usernameHelp" class="form-text text-muted">
                    Username must be at least 3 characters, and short than 30.
                    Username can only contain alphanumeric characters and underscores.
                </small>
            </div>
            
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="password">Password</label>
                    <input
                        v-model="user.password"
                        type="password"
                        class="form-control"
                        id="password"
                        aria-describedby="passwordHelp"
                        placeholder="Password" required>
                    <small id="passwordHelp" class="form-text text-muted">
                        Password must be 10 or more characters long.
                    </small>
                </div>

                <div class="form-group col-md-6">
                    <label for="confirmPassword">Confirm password</label>
                    <input
                        v-model="user.confirmPassword"
                        type="password"
                        class="form-control"
                        id="confirmPassword"
                        aria-describedby="confirmPasswordHelp"
                        placeholder="Password" required>
                    <small id="confirmPasswordHelp" class="form-text text-muted">
                        Reenter password.
                    </small>
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </section>
</template>

<script>
import Joi from 'joi';

const schema = Joi.object().keys({
    username: Joi.string().regex(/(^[a-zA-Z0-9_]*$)/).min(3).max(30).required(),
    password: Joi.string().min(10).required(),
    confirmPassword: Joi.string().min(10).required(),
});

export default {
    data: () => ({
        errorMessage: "",
        user: {
            username: "",
            password: "",
            confirmPassword: ""
        }
    }),
    watch: {
        user: {
            handler() {
                this.errorMessage = "";
            },
            deep: true
        }
    },
    methods: {
        signup() {
            this.errorMessage = "";
            if (this.validUser()) {
                
            }
        },
        validUser() {
            if (this.user.password !== this.user.confirmPassword) {
                this.errorMessage = "Passwords must match!"
                return false;
            }
            const result = Joi.validate(this.user, schema);
            if (result.error === null) {
                return true;
            }
            if (result.error.errorMessage.includes("username")) {
                this.errorMessage = "Username invalid";
            } else {
                this.errorMessage = "Password invalid";
            }
            return false;
        }
    }
}
</script>

<style>

</style>

