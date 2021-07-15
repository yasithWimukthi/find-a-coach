<template>
    <form>
        <div class="form-control">
            <label for="email">E-mail</label>
            <input type="email" id="email" />
        </div>
        <div class="form-control">
            <label for="password">Password</label>
            <input type="password" id="password" />
        </div>
        <base-button>Login</base-button>
        <base-button type="button" mode="flat">Sign Up</base-button>
    </form>
</template>

<script>
  export default {
    name: 'UserAuth'
  };
</script>

<style scoped>
    form {
        margin: 0 auto;
        border: 1px solid #ccc;
        border-radius: 12px;
        padding: 1rem;
        width: 50%;

    }

    .form-control {
        margin: 0.5rem 0;
    }

    label {
        font-weight: bold;
        margin-bottom: 0.5rem;
        display: block;
    }

    input,
    textarea {
        display: block;
        width: 100%;
        font: inherit;
        border: 1px solid #ccc;
        padding: 0.15rem;
    }

    input:focus,
    textarea:focus {
        border-color: #3d008d;
        background-color: #faf6ff;
        outline: none;
    }
</style>
