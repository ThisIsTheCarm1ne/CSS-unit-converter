<script lang="ts">
  import Card, { Content } from '@smui/card';
  import { input, inputUnit, outputUnit, viewportWidth } from './units.ts';

  function convertInputUnitToPx(): number {
    let convertedInput: number = 0;
    switch (inputUnit) {
      case "vw":
        convertedInput = ($input * $viewportWidth) / 100;
        break;
      case "%":
        console.log("%");
        break;
      case "vh":
        console.log("vh");
        break;
      default:
        convertedInput = input;
        break;
    }
    return convertedInput;
  }
  
  $: inputConverted = $inputUnit !== "px" ? convertInputUnitToPx() : $input;
  $: output = ($input > 0 && $viewportWidth > 0) ? ((inputConverted / $viewportWidth) * 100).toFixed((2)) : 0;
</script>

<div class="output">
  <Card style="height: 100%;">
    <div style="padding: 1rem;">
      <h2 class="mdc-typography--headline6" style="margin: 0;">
        Viewport Width output
      </h2>
    </div>
    <Content class="mdc-typography--body2">
      {output}
    </Content>
  </Card>
</div>

<style>
  .output {
    width: 100%;
  }
</style>
