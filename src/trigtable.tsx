import { Detail, Action, ActionPanel } from "@raycast/api";

const markdown = `## Trigonometry Table
| Angle (deg) | Angle (rad)  | sin(x)                              | cos(x)                              | tan(x)                            | sec(x)                            | csc(x)                            | cot(x)                            |
|-------------|--------------|-------------------------------------|-------------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|
| 0º           | 0            | 0                                   | 1                                   | 0                                 | 1                                 | -                                 | -                                 |
| 30º          | π/6          | √(1/2) ≈ 0.707                      | √(3/2) ≈ 0.866                      | √(3/3) ≈ 0.577                    | 2/√3 ≈ 1.155                      | 2/√1 ≈ 2                          | √3 ≈ 1.732                        |
| 45º          | π/4          | √2/2 ≈ 0.707                        | √2/2 ≈ 0.707                        | 1                                 | √2 ≈ 1.414                        | 2/√2 ≈ 1.414                      | 1                                 |
| 60º          | π/3          | √(3/2) ≈ 0.866                      | √(1/2) ≈ 0.707                      | √3 ≈ 1.732                        | 2                                 | 2/√3 ≈ 1.155                      | √(1/3) ≈ 0.577                    |
| 90º          | π/2          | 1                                   | 0                                   | -                                 | -                                 | 1                                 | 0                                 |`
export default function TrigTable() {
     
    
    return (
        <Detail 
        markdown = {markdown}
        actions={
            <ActionPanel title="Trig Table Actions">
              <Action.CopyToClipboard title="Copy Table in Markdown" content={markdown} />
            </ActionPanel>
          }
        />
    )
}