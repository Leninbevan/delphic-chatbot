
<script lang="ts">
  import { z } from "zod";
  import { toast } from "svelte-sonner";
  import { Input } from "$lib/components/ui/input/index";
  import Label from "$lib/components/ui/label/label.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { login } from "../auth";
  import { goto } from '$app/navigation';

  let email = "";
  let password = "";
  let emailError = "";
  let passwordError = "";
  let showPassword = false;

  const loginSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

  async function handleLogin() {
    emailError = "";
    passwordError = "";

    // Validate input using Zod
    const result = loginSchema.safeParse({ email, password });
    if (!result.success) {
      result.error.errors.forEach((error) => {
        if (error.path[0] === "email") {
          emailError = error.message;
        } else if (error.path[0] === "password") {
          passwordError = error.message;
        }
      });
      return;
    }

    try {
      await login(email, password);
      toast.success("Login successful!");
      goto('/discover');
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  function togglePasswordVisibility() {
    showPassword = !showPassword;
  }
</script>

<div
  class="flex items-center justify-center h-screen bg-gray-100 bg-white loginBackground"
>
  <form
    class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 w-full max-w-sm loginForm"
  >
    <div class="flex justify-center mb-8">
      <div>
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="avatar"
          class="w-24 h-24 bg-gray-300 rounded-full"
        />
      </div>
    </div>

    <h2 class="text-2xl font-semibold text-center mb-6">Login</h2>

    <div class="mb-4 relative">
      <Label
        for="email"
        class="block text-gray-700 text-sm font-medium loginLabel">Email</Label
      >
      <div class="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 mt-1"
        >
          <path
            d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"
          />
        </svg>
        <Input
          id="email"
          type="email"
          bind:value={email}
          class="text-field mt-2 pl-10 pr-4 w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
          required
        />
      </div>
      {#if emailError}
        <p class="text-red-500 text-xs mt-1">{emailError}</p>
      {/if}
    </div>

    <div class="mb-6 relative">
      <Label
        for="password"
        class="block text-gray-700 text-sm font-medium loginLabel"
        >Password</Label
      >
      <div class="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 mt-1"
        >
          <path
            d="M6 8v-2c0-3.313 2.687-6 6-6 3.312 0 6 2.687 6 6v2h-2v-2c0-2.206-1.795-4-4-4s-4 1.794-4 4v2h-2zm-3 2v14h18v-14h-18z"
          />
        </svg>
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          bind:value={password}
          class="text-field mt-2 pl-10 pr-4 w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
          required
        />
        {#if password && password.length > 0}
          {#if showPassword}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 mt-1"
              on:click={togglePasswordVisibility}
            >
              <path
                d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm8.413 7c-1.837 2.878-4.897 5.5-8.413 5.5-3.465 0-6.532-2.632-8.404-5.5 1.871-2.868 4.939-5.5 8.404-5.5 3.518 0 6.579 2.624 8.413 5.5zm-8.411-4c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z"
                fill-rule="nonzero"
              />
            </svg>
          {:else}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 mt-1"
              on:click={togglePasswordVisibility}
            >
              <path
                d="m17.069 6.546 2.684-2.359c.143-.125.32-.187.497-.187.418 0 .75.34.75.75 0 .207-.086.414-.254.562l-16.5 14.501c-.142.126-.319.187-.496.187-.415 0-.75-.334-.75-.75 0-.207.086-.414.253-.562l2.438-2.143c-1.414-1.132-2.627-2.552-3.547-4.028-.096-.159-.144-.338-.144-.517s.049-.358.145-.517c2.111-3.39 5.775-6.483 9.853-6.483 1.815 0 3.536.593 5.071 1.546zm2.319 1.83c.966.943 1.803 2.014 2.474 3.117.092.156.138.332.138.507s-.046.351-.138.507c-2.068 3.403-5.721 6.493-9.864 6.493-1.297 0-2.553-.313-3.729-.849l1.247-1.096c.795.285 1.626.445 2.482.445 3.516 0 6.576-2.622 8.413-5.5-.595-.932-1.318-1.838-2.145-2.637zm-3.434 3.019c.03.197.046.399.046.605 0 2.208-1.792 4-4 4-.384 0-.756-.054-1.107-.156l1.58-1.389c.895-.171 1.621-.821 1.901-1.671zm-.058-3.818c-1.197-.67-2.512-1.077-3.898-1.077-3.465 0-6.533 2.632-8.404 5.5.853 1.308 1.955 2.567 3.231 3.549l1.728-1.519c-.351-.595-.553-1.289-.553-2.03 0-2.208 1.792-4 4-4 .925 0 1.777.315 2.455.843zm-2.6 2.285c-.378-.23-.822-.362-1.296-.362-1.38 0-2.5 1.12-2.5 2.5 0 .36.076.701.213 1.011z"
                fill-rule="nonzero"
              />
            </svg>
          {/if}
        {/if}
      </div>
      {#if passwordError}
        <p class="text-red-500 text-xs mt-1">{passwordError}</p>
      {/if}
    </div>

    <Button
      class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      on:click={handleLogin}
    >
      Login
    </Button>
  </form>
</div>