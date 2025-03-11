<script lang="ts">
  import "../app.css";
  import logo from "../assests/logo.jpg";
  import { Toaster } from "svelte-sonner";
  import { page } from "$app/stores";
  import CircleUser from "lucide-svelte/icons/circle-user";
  import ChartLine from "lucide-svelte/icons/chart-line";
  import Package from "lucide-svelte/icons/package";
  import House from "lucide-svelte/icons/house";
  import ShoppingCart from "lucide-svelte/icons/shopping-cart";
  import Bell from "lucide-svelte/icons/bell";
  import Menu from "lucide-svelte/icons/menu";
  import Package2 from "lucide-svelte/icons/package-2";
  import Search from "lucide-svelte/icons/search";
  import Users from "lucide-svelte/icons/users";
  import { Badge } from "$lib/components/ui/badge/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import * as Sheet from "$lib/components/ui/sheet/index.js";
  import { Avatar } from "$lib/components/ui/avatar/index.js";
  import AvatarImage from "$lib/components/ui/avatar/avatar-image.svelte";
  import AvatarFallback from "$lib/components/ui/avatar/avatar-fallback.svelte";
  import * as Select from "$lib/components/ui/select/index.js";
  let { children } = $props();
</script>

<Toaster position="top-right" />
{#if $page.url.pathname !== "/"}
  <div
    class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]"
  >
    <div class="bg-muted/40 hidden border-r md:block">
      <div class="flex h-full max-h-screen flex-col gap-4">
        <div class="h-14 flex items-center justify-center border-b lg:h-[60px]">
          <a href="/" class="w-full h-full">
            <img
              src={logo}
              alt="logo"
              class="max-w-full max-h-full w-full object-fill"
            />
          </a>
        </div>
        <div>
          <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
            <div>
              <a
                href="##"
                class="text-base text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
              >
                Discover
              </a>
              <div class="border-l-2 border-black ml-5">
                <a
                  href="##"
                  class="text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
                >
                  Spaces
                </a>
                <a
                  href="##"
                  class="text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
                >
                  Agents
                </a>
                <a
                  href="##"
                  class="text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
                >
                  Characters
                </a>
              </div>
              <a
                href="##"
                class="text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all text-base	"
              >
                Chats
              </a>
              <a
                href="##"
                class="text-base text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
              >
                Dashboard
              </a>
            </div>
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
            <!-- <div class="ml-auto font-medium">+$99.00</div> -->
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
    <div class="flex flex-col">
      <!-- <header class="bg-muted/40 flex h-14 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6">
      <Sheet.Root>
        <Sheet.Trigger asChild let:builder>
          <Button
            variant="outline"
            size="icon"
            class="shrink-0 md:hidden"
            builders={[builder]}
          >
            <Menu class="h-5 w-5" />
            <span class="sr-only">Toggle navigation menu</span>
          </Button>
        </Sheet.Trigger>
        <Sheet.Content side="left" class="flex flex-col">
          <nav class="grid gap-2 text-lg font-medium">
            <a href="##" class="flex items-center gap-2 text-lg font-semibold">
              <Package2 class="h-6 w-6" />
              <span class="sr-only">Acme Inc</span>
            </a>
            <a
              href="##"
              class="text-muted-foreground hover:text-foreground mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2"
            >
              <House class="h-5 w-5" />
              Dashboard
            </a>
            <a
              href="##"
              class="bg-muted text-foreground hover:text-foreground mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2"
            >
              <ShoppingCart class="h-5 w-5" />
              Orders
              <Badge
                class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
              >
                6
              </Badge>
            </a>
            <a
              href="##"
              class="text-muted-foreground hover:text-foreground mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2"
            >
              <Package class="h-5 w-5" />
              Products
            </a>
            <a
              href="##"
              class="text-muted-foreground hover:text-foreground mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2"
            >
              <Users class="h-5 w-5" />
              Customers
            </a>
            <a
              href="##"
              class="text-muted-foreground hover:text-foreground mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2"
            >
              <ChartLine class="h-5 w-5" />
              Analytics
            </a>
          </nav>
          <div class="mt-auto">
            <Card.Root>
              <Card.Header>
                <Card.Title>Upgrade to Pro</Card.Title>
                <Card.Description>
                  Unlock all features and get unlimited access to our support
                  team.
                </Card.Description>
              </Card.Header>
              <Card.Content>
                <Button size="sm" class="w-full">Upgrade</Button>
              </Card.Content>
            </Card.Root>
          </div>
        </Sheet.Content>
      </Sheet.Root>
      <div class="w-full flex-1">
        <form>
          <div class="relative">
            <Search class="text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4" />
            <Input
              type="search"
              placeholder="Search products..."
              class="bg-background w-full appearance-none pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild let:builder>
          <Button
            builders={[builder]}
            variant="secondary"
            size="icon"
            class="rounded-full"
          >
            <CircleUser class="h-5 w-5" />
            <span class="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="end">
          <DropdownMenu.Label>My Account</DropdownMenu.Label>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Settings</DropdownMenu.Item>
          <DropdownMenu.Item>Support</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Logout</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </header> -->

      <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        {@render children()}
        <!-- <div class="flex flex-col">
          <h1 class="text-lg font-semibold md:text-2xl">Discover</h1>
          <div>Text that will describe the page in brief</div>
        </div>
        <div class="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
          <div class="flex flex-col items-center gap-1 text-center">
            <h3 class="text-2xl font-bold tracking-tight">
              You have no products
            </h3>
            <p class="text-muted-foreground text-sm">
              You can start selling as soon as you add a product.
            </p>
            <Button class="mt-4">Add Product</Button>
          </div>
        </div> -->
      </main>
    </div>
  </div>
{/if}

<!-- Render Children -->
{@render children()}
