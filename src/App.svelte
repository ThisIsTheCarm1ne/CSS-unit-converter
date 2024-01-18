<script lang="ts">
  import SelectMenus from "./lib/SelectMenus.svelte";
  import InputFields from "./lib/InputFields.svelte";
  import OutputFields from "./lib/OutputFields.svelte";
  import AboutAuthor from "./lib/AboutAuthor.svelte";
</script>

<main>
  <AboutAuthor />
  <div class="content">
    <SelectMenus />
    <div class="fields">
      <InputFields />
      <OutputFields />
    </div>
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
  }
  .content {
    width: 80%;
  }
  .fields {
    display: flex;
    justify-content: space-around;
    gap: 1vw;
    width: 100%;
  }
  @media only screen and (max-width: 720px) {
    .content {
      width: 90%;
    }
    .fields {
      flex-direction: column;
      gap: 2vh;
      margin-top: 2vh;
    }
  }
</style>
