<script lang="ts">
  import Select, { Option } from '@smui/select';
  import { inputUnit, outputUnit, options } from './units.ts';
</script>

<div class="select_menus">
  <div class="columns margins" style="justify-content: flex-start; width: 100%;">
    <div>
      <Select bind:value={$inputUnit} label="Input Select Menu" style="width: 100%;">
        {#each options as option}
          <Option value={option}>{option}</Option>
        {/each}
      </Select>
    </div>
  </div>
  <div class="columns margins" style="justify-content: flex-start; width: 100%;">
    <div>
      <Select bind:value={$outputUnit} label="Output Select Menu" style="width: 100%;">
        {#each options as option}
          <Option value={option}>{option}</Option>
        {/each}
      </Select>
    </div>
  </div>
</div>

<style>
  .select_menus {
    display: flex;
    justify-content: space-around;
    gap: 1vw;
    margin-bottom: 1vw;
  }
  @media only screen and (max-width: 720px) {
    .select_menus {
      flex-direction: column;
      gap: 1vh;
    }
  }
</style>
