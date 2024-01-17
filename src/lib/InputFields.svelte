<script lang="ts">
  import Textfield from '@smui/textfield';
  import { input, inputUnit, viewportWidth } from './units.ts';

  let label: string, suffix: string;

  $: {
    switch ($inputUnit) {
      case "px":
        label = "Viewport Width";
        suffix = "px";
        $viewportWidth = document.body.clientWidth || 1080;
        break;
      case "vw":
        label = "Viewport Width (vw)";
        suffix = "vw";
        $viewportWidth = 100;
        break;
      case "%":
        label = "Base";
        suffix = "%";
        $viewportWidth = 100;
        break;
      case "vh":
        label = "Viewport Height";
        suffix = "vh";
        $viewportWidth = document.body.clientHeight || 720;
        break;
      case "rm":
        label = "Base";
        suffix = "px";
        $viewportWidth = 16;
        break;
      case "rem":
        label = "Base";
        suffix = "px";
        $viewportWidth = 16;
        break;
      default:
        label = "Unknown Label";
        suffix = "Unknown Suffix";
    }
  }
</script>

<div class="input_fields">
  <Textfield
    variant="outlined"
    bind:value={$input}
    label={$inputUnit}
    suffix={$inputUnit}
    input$pattern="\d+"
    type="number"
  />
  <Textfield
    variant="outlined"
    bind:value={$viewportWidth}
    label={label}
    suffix={suffix}
    input$pattern="\d+"
    type="number"
  />
</div>

<style>
  .input_fields {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2vh;
  }
</style>
