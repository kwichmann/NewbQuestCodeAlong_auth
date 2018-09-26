<template>
    <section>
        <h1>Signup</h1>

        <form>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text"
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
                    <input type="password"
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
                    <input type="password"
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
export default {
    name: "signup",
}
</script>

<style>

</style>

