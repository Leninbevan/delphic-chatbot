<script>
  import Input from "$lib/components/ui/input/input.svelte";
  import Search from "lucide-svelte/icons/search";
  import * as Select from "$lib/components/ui/select/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
</script>

<div class="flex flex-col">
  <div>
    <h1 class="text-lg font-bold md:text-2xl">Discover</h1>
    <div>Text that will describe the page in brief</div>
    <div>
      <div class="flex items-center gap-4 text-center p-[70px]">
        <Select.Root>
          <Select.Trigger class="w-32 rounded-none">
            <Select.Value placeholder="Spaces"></Select.Value>
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="light">Light</Select.Item>
            <Select.Item value="dark">Dark</Select.Item>
            <Select.Item value="system">System</Select.Item>
          </Select.Content>
        </Select.Root>
        <div class="relative">
          <Search
            class="text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4"
          />
          <Input
            type="search"
            placeholder="Search for items here..."
            class="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] rounded-none"
          />
        </div>
      </div>
    </div>
  </div>
  <div>
    <h1 class="text-lg font-bold md:text-2xl">Spaces</h1>
    <div class="flex flex-wrap gap-y-5 gap-x-10 mt-4">
      <Card.Root class="flex rounded-none h-[130px] p-4 gap-6 w-fit">
        <div class="h-full">
          <img src="https://github.com/shadcn.png" alt="card" class="max-w-full max-h-full w-full object-contain"/>
        </div>
        <div class="flex flex-col justify-around">
          <Card.Header
            class="p-0"
          >
            <Card.Title class="text-l font-medium"
              >Title of the item</Card.Title
            >
          </Card.Header>
          <Card.Content class="p-0">
            <div class="text-muted-foreground text-s">
              A brief description about the item
            </div>
          </Card.Content>
        </div>
      </Card.Root>
      <Card.Root class="flex rounded-none h-[130px] p-4 gap-6 w-fit">
        <div class="h-full">
          <img src="https://github.com/shadcn.png" alt="card" class="max-w-full max-h-full w-full object-contain"/>
        </div>
        <div class="flex flex-col justify-around">
          <Card.Header
            class="p-0"
          >
            <Card.Title class="text-l font-medium"
              >Title of the item</Card.Title
            >
          </Card.Header>
          <Card.Content class="p-0">
            <div class="text-muted-foreground text-s">
              A brief description about the item
            </div>
          </Card.Content>
        </div>
      </Card.Root>
      <Card.Root class="flex rounded-none h-[130px] p-4 gap-6 w-fit">
        <div class="h-full">
          <img src="https://github.com/shadcn.png" alt="card" class="max-w-full max-h-full w-full object-contain"/>
        </div>
        <div class="flex flex-col justify-around">
          <Card.Header
            class="p-0"
          >
            <Card.Title class="text-l font-medium"
              >Title of the item</Card.Title
            >
          </Card.Header>
          <Card.Content class="p-0">
            <div class="text-muted-foreground text-s">
              A brief description about the item
            </div>
          </Card.Content>
        </div>
      </Card.Root>
    </div>
  </div>
</div>
