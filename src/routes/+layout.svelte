<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import AvatarFallback from "$lib/components/ui/avatar/avatar-fallback.svelte";
  import AvatarImage from "$lib/components/ui/avatar/avatar-image.svelte";
  import { Avatar } from "$lib/components/ui/avatar/index.js";
  import * as Select from "$lib/components/ui/select/index.js";
  import { Toaster } from "svelte-sonner";
  import "../app.css";

  let { children } = $props();

  function handleNavigate(endPoint: string): void {
    goto(endPoint);
  }

  const tabs = [
    { label: "Discover", endpoint: "/discover", hasBorder: false },
    { label: "Spaces", endpoint: "/spaces", hasBorder: true },
    { label: "Agents", endpoint: "/agents", hasBorder: true },
    { label: "Characters", endpoint: "/characters", hasBorder: true },
    { label: "Chats", endpoint: "/chats", hasBorder: false },
    { label: "Dashboard", endpoint: "/dashboard", hasBorder: false },
  ];

  // Define which pages should not display the header
  const pagesWithoutHeader = ["/discover", "/spaces", "/agents", "/characters"];

  // Define a mapping for dynamic header content
  const pageHeaders: Record<string, string> = {
    "/chats": "Chats",
  };
  
</script>

<Toaster position="top-right" />

{#if $page.url.pathname !== "/"}
  <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <!-- Sidebar -->
    <div class="bg-muted/40 hidden border-r md:block">
      <div class="flex h-full max-h-screen flex-col gap-4">
        <div class="h-14 flex items-center justify-center border-b lg:h-[60px]">
          <a href="/" class="w-full h-full">
            <img
              src="https://logowik.com/content/uploads/images/chatbot9103.jpg"
              alt="logo"
              class="max-w-full max-h-full w-full object-cover"
            />
          </a>
        </div>
        <div>
          <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
            {#each tabs as tab}
              <button
                type="button"
                onclick={() => handleNavigate(tab.endpoint)}
                onkeydown={(e) => e.key === "Enter" && handleNavigate(tab.endpoint)}
                class="cursor-pointer flex items-center gap-3 px-3 py-2 transition-all"
                class:text-primary={$page.url.pathname === tab.endpoint}
                class:bg-gray-200={$page.url.pathname === tab.endpoint}
                class:border-l-2={tab.hasBorder}
                class:border-black={tab.hasBorder}
                class:ml-5={tab.hasBorder}
                class:shadow={$page.url.pathname === tab.endpoint}
                aria-label={tab.label}
              >
                {tab.label}
              </button>
            {/each}
          </nav>
        </div>
        <div class="flex flex-col gap-2.5 px-4">
          <div>Recent</div>
          <div class="flex items-center justify-between p-4 text-lg border border-black">
            <div>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="chatbot" />
                <AvatarFallback>chatbot</AvatarFallback>
              </Avatar>
            </div>
            <div>Space name</div>
          </div>
          <div class="flex items-center justify-between p-4 text-lg border border-black">
            <div>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="chatbot" />
                <AvatarFallback>chatbot</AvatarFallback>
              </Avatar>
            </div>
            <div>Agent name</div>
          </div>
        </div>
        <div class="mt-auto p-4">
          <div class="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div class="grid gap-1">
              <p class="text-sm font-medium leading-none">William Kim</p>
              <p class="text-muted-foreground text-sm">will@email.com</p>
            </div>
            <Select.Root>
              <Select.Trigger>
                <Select.Value placeholder="select"></Select.Value>
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="light">Light</Select.Item>
                <Select.Item value="dark">Dark</Select.Item>
                <Select.Item value="system">System</Select.Item>
              </Select.Content>
            </Select.Root>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex flex-col">
      {#if !pagesWithoutHeader.includes($page.url.pathname)}
        <header class="bg-muted/40 flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <div class="text-lg font-bold md:text-2xl">
            {pageHeaders[$page.url.pathname] || "Page"}
          </div>
        </header>
      {/if}

      <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-[50px]">
        {@render children()}
      </main>
    </div>
  </div>
{:else}
  {@render children()}
{/if}
