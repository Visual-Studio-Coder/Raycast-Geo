import { Detail, LaunchProps, showToast, Toast, Action, ActionPanel } from "@raycast/api";

export default function NGon(props: LaunchProps<{ arguments: Arguments.Polygon }>) {
  const { sides, sidelength } = props.arguments;
  
  const fractionArray = sidelength.split("/");
  let result = Number(fractionArray[0]);

  for (let i = 1; i < fractionArray.length; i++) {
    const denominator = Number(fractionArray[i]);
    result /= denominator;
  }

console.log(result); // Output: 0.08181818181818182

  console.log(`title: ${sidelength}, subtitle: ${result}`);
  const intError: Toast.Options = {
    style: Toast.Style.Failure,
    title: "Invalid",
    message: "Side count must be an integer",
    primaryAction: {
      title: "Do something",
      onAction: (toast) => {
        console.log("The toast action has been triggered");
        toast.hide();
      },
    },
  };
  const decimal: Toast.Options = {
    style: Toast.Style.Failure,
    title: "Invalid",
    message: "Make sure to only use decimals or fractions values.",
    primaryAction: {
      title: "Do something",
      onAction: (toast) => {
        console.log("The toast action has been triggered");
        toast.hide();
      },
    },
  };
  if (Number(sides) < 3 || Number(result) <= 0) {
    //throw new Error('Invalid inputs: number of sides must be at least 3, and side length must be greater than 0.');
    showToast(decimal);
    return;
  } else {
    if (!Number.isInteger(Number(sides))){
    showToast(intError);
    return;
    }
  }
  function calculatePolygonArea(sides: number, sideLength: number) {
    // Check for valid inputs
    
    
    // Calculate the area of the polygon
    const apothem = sideLength / (2 * Math.tan(Math.PI / sides));
    const perimeter = sides * sideLength;
    const area = 0.5 * apothem * perimeter;

    return Math.round(area * 100) / 100;

    
  }
  
  

  const sideLengthCount: Toast.Options = {
    style: Toast.Style.Failure,
    title: "Invalid",
    message: "Side count must be greater than three and side length must be greater than 0.",
    primaryAction: {
      title: "Do something",
      onAction: (toast) => {
        console.log("The toast action has been triggered");
        toast.hide();
      },
    },
  };
  function isNotANumber(arg: any): boolean {
    return isNaN(arg);
  }

  if (isNotANumber(sides) || isNotANumber(result)) {
    showToast(decimal);
    return;
  } else {
    if (Number(sides) < 3 || Number(result) <= 0) {
      showToast(sideLengthCount);
      return;
    }
    
    
  }

  function getParsedPolygonName(sides: number): string {
    let parsedSides = "";
  
    switch (sides) {
      case 3:
        parsedSides = "Equilateral triangle";
        break;
      case 4:
        parsedSides = "Square";
        break;
      case 5:
        parsedSides = "Pentagon";
        break;
      case 6:
        parsedSides = "Hexagon";
        break;
      case 7:
        parsedSides = "Heptagon";
        break;
      case 8:
        parsedSides = "Octagon";
        break;
      case 9:
        parsedSides = "Nonagon";
        break;
      case 10:
        parsedSides = "Decagon";
        break;
      case 11:
        parsedSides = "Hendecagon";
        break;
      case 12:
        parsedSides = "Dodecagon";
        break;
      // Add cases for other polygons as needed
      default:
        parsedSides = `${String(sides)}-gon`;
        break;
    }
  
    return parsedSides;
  }
  

var parsedSides = {
  
}

var table = `| Shape        | Sidelength | Area |
|--------------|--------------------|---------------|
| ${getParsedPolygonName(Number(sides))} | ${Number(sidelength)} units | **${calculatePolygonArea(Number(sides), Number(sidelength))} units²** |`
  

  return (
    <Detail  actions={
      <ActionPanel title="Actions">
        <Action.Paste
          title="Paste Area"
          content = {`${calculatePolygonArea(Number(sides), result)} units²`}
        />
        <Action.Paste
          title="Paste Area with Arguments"
          content = {`Polygon with ${sides} sides and ${result} length = ${calculatePolygonArea(Number(sides), result)} units²`}
        />
      </ActionPanel>
    }
    markdown= {`# Polygon Area Calculator\n${table}`}
    navigationTitle="Calculate area of regular polygon"
      metadata={
        <Detail.Metadata>
          <Detail.Metadata.Label title="Number of Sides" text={`${Number(sides)} sides`} />
          <Detail.Metadata.Label title="Side Length" text={`${Number(sidelength)} units`} />
          <Detail.Metadata.Separator />
          <Detail.Metadata.Label title="Central Angle" text={`${Number((360/Number(sides))).toFixed(2)}º`} />
          <Detail.Metadata.Label title="Exterior Angle" text={`${Number((360/Number(sides))).toFixed(2)}º`}  />
          <Detail.Metadata.Label title="Interior Angle" text={`${Number(180-(360/Number(sides))).toFixed(2)}º`} />
          <Detail.Metadata.Label title="Apothem" text={`${Math.round(result / (2 * Math.tan(Math.PI / Number(sides))) * 100) / 100} units`} />
          <Detail.Metadata.Label title="Radius" text={`${Number(result / (2 * Math.sin(Math.PI / Number(sides)))).toFixed(2)} units`} />
          <Detail.Metadata.Label title="Perimeter" text={`${Number(sides) * result} units`} />
          <Detail.Metadata.TagList title="Concepts">
            <Detail.Metadata.TagList.Item text="Uses Trignonometry" color={"#eed535"} />
          </Detail.Metadata.TagList>
          <Detail.Metadata.Separator />
          <Detail.Metadata.Link title="Learn more" target="https://www.mathopenref.com/polygonregularareaderive.html" text="Derivation of Area" />
          <Detail.Metadata.Link title="" target="https://www.mathsisfun.com/geometry/polygons.html" text="Names and Types of Polygons" />
        </Detail.Metadata>
      }  
  />
  );
}