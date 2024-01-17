<script lang="ts">
  import Card, { Content } from '@smui/card';
  import { input, inputUnit, outputUnit, viewportWidth } from './units.ts';

  function convertInputUnitToPx(input: number, inputUnit: string, base: number): number {
    if (inputUnit === "vw" || inputUnit === "vh" || inputUnit === "%") {
      return (input * base) / 100;
    } else if (inputUnit === "rem" || inputUnit === "em") {
      return input * base;
    } else {
      return input;
    }
  }

  function convertInput(input: number, base: number, outputUnit: string): number {
    if (outputUnit === "vw" || outputUnit === "vh" || outputUnit === "%") {
      return (input / base) * 100;
    } else if (outputUnit === "rem" || outputUnit === "em") {
      return input / base;
    } else {
      return input;
    }
  }
  
  let output: number = 0;

  $: {
    const inputConverted = inputUnit !== "px" ? convertInputUnitToPx($input, $inputUnit, $viewportWidth) : $input;
    output = ($input > 0 && $viewportWidth > 0) ? (convertInput(inputConverted, $viewportWidth, $outputUnit)).toFixed(2) : 0;
  }
</script>

<div class="output">
  <Card style="height: 100%;">
    <div style="padding: 1rem;">
      <h2 class="mdc-typography--headline6" style="margin: 0;">
        Output
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
