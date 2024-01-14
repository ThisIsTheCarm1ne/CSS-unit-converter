<script lang="ts">
  import Textfield from '@smui/textfield';
  import Card, { Content } from '@smui/card';
  import Select, { Option } from '@smui/select';

  const options: string[] = ["px", "vw", "%", "vh"];

  let viewportWidth: number = document.body.clientWidth || 0;
  let input: number = 0;
  let output: number = 0;
  let inputUnit: string = "px";
  let outputUnit: string = "vw";

  function convertInputUnitToPx(): number {
    let convertedInput: number = 0;
    switch (inputUnit) {
      case "vw":
        convertedInput = (input * viewportWidth) / 100;
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
  
  $: inputConverted = inputUnit !== "px" ? convertInputUnitToPx() : input;
  $: console.log(inputConverted);
  $: output = (input > 0 && viewportWidth > 0) ? (inputConverted / viewportWidth) * 100 : 0;
  $: output = output.toFixed(2);
</script>

<main>
  <div class="content">
    <div class="buttons">
      <div class="columns margins" style="justify-content: flex-start; width: 100%;">
        <div>
          <Select bind:value={inputUnit} label="Input Select Menu" style="width: 100%;">
            {#each options as option}
              <Option value={option}>{option}</Option>
            {/each}
          </Select>
        </div>
      </div>
      <div class="columns margins" style="justify-content: flex-start; width: 100%;">
        <div>
          <Select bind:value={outputUnit} label="Output Select Menu" style="width: 100%;">
            {#each options as option}
              <Option value={option}>{option}</Option>
            {/each}
          </Select>
        </div>
      </div>
    </div>
    <div class="fields">
      <div class="input_fields">
        <Textfield
          variant="outlined"
          bind:value={input}
          label={inputUnit}
          suffix={inputUnit}
          input$pattern="\d+"
          type="number"
        />
        <Textfield
          variant="outlined"
          bind:value={viewportWidth}
          label="Viewport Width"
          suffix="px"
          input$pattern="\d+"
          type="number"
        />
      </div>
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
  .buttons {
    display: flex;
    justify-content: space-around;
    gap: 1vw;
    margin-bottom: 1vw;
  }
  .fields {
    display: flex;
    justify-content: space-around;
    gap: 1vw;
    width: 100%;
  }
  .input_fields {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2vh;
  }
  .output {
    width: 100%;
  }
</style>
