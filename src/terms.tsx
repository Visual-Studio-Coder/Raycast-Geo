import { ActionPanel, Action, Icon, List, Form } from "@raycast/api";
import { useState } from "react";

interface Terms {
  term: string;
  meaning: string;
  image: string;
}
const termsArray: Terms[] = [
    {
      term: "Perpendicular Line Segments",
      meaning: "Two line segments that intersect to form 90º angles",
      image: "https://assets2.varsitytutors.com/vt-aplusmath/images/geoterms/0-f1c6bd0cfb.gif"
    },
    {
      term: "Right Angle",
      meaning: "A 90º angle",
      image: "https://assets2.varsitytutors.com/vt-aplusmath/images/geoterms/1-09605cbc14.gif"
    },
    {
      term: "Equilateral Triangle",
      meaning: "A triangle with all sides and angles equal",
      image: "https://assets2.varsitytutors.com/vt-aplusmath/images/geoterms/2-090f2dfdee.gif"
    },
    {
      term: "Scalene Triangle",
      meaning: "A triangle with three unequal sides and angles",
      image: "https://assets2.varsitytutors.com/vt-aplusmath/images/geoterms/3-d118b137dc.gif"
    },
    {
      term: "Vertex",
      meaning: "The intersection point of two sides of a plane figure",
      image: "https://assets2.varsitytutors.com/vt-aplusmath/images/geoterms/4-e33593f562.gif"
    },
    {
      term: "Right Triangle",
      meaning: "A triangle with one internal angle equal to 90º",
      image: "https://assets2.varsitytutors.com/vt-aplusmath/images/geoterms/5-5be470904a.gif"
    },
    {
      term: "Pentagon",
      meaning: "A polygon with 5 sides and 5 angles",
      image: "https://assets2.varsitytutors.com/vt-aplusmath/images/geoterms/6-36db1116d3.gif"
    },
    {
      term: "Square",
      meaning: "A rectangle having all four sides of equal length",
      image: "https://assets2.varsitytutors.com/vt-aplusmath/images/geoterms/7-b4dfea364e.gif"
    },
    {
      term: "Intersecting Line Segments",
      meaning: "Line segments that cross each other",
      image: "https://assets2.varsitytutors.com/vt-aplusmath/images/geoterms/8-ff2a8590ec.gif"
    },
    {
      term: "Acute Angle",
      meaning: "An angle less than 90º but greater than 0º",
      image: "https://assets2.varsitytutors.com/vt-aplusmath/images/geoterms/9-1de35e2337.gif"
    },
    {
      term: "Chord",
      meaning: "The line segment between two points on a given curve",
      image: "https://assets2.varsitytutors.com/vt-aplusmath/images/geoterms/10-33cf5010e9.gif"
    },
    {
      term: "Radius",
      meaning: "A straight line extending from the center of a circle or sphere to the circumference or surface",
      image: "https://assets2.varsitytutors.com/vt-aplusmath/images/geoterms/11-1b4630d20b.gif"
    },
    {
      term: "Line Segment",
      meaning: "One part of a line",
      image: "https://assets2.varsitytutors.com/vt-aplusmath/images/geoterms/12-1bfcce542c.gif"
    },
    {
      term: "Line",
      meaning: "A continuous extent of length",
      image: "https://assets2.varsitytutors.com/vt-aplusmath/images/geoterms/13-e599527130.gif"
    },
    {
      term: "Point",
      meaning: "A position in space",
      image: "https://assets2.varsitytutors.com/vt-aplusmath/images/geoterms/14-0bd701c97b.gif"
    },
    {
      term: "Parallelogram",
      meaning: "A quadrilateral having both pairs of opposite sides parallel to each other",
      image: "https://assets2.varsitytutors.com/vt-aplusmath/images/geoterms/15-368b66e2c0.gif"
    },
    {
      term: "Rectangle",
      meaning: "A parallelogram having four right angles",
      image: "https://assets2.varsitytutors.com/vt-aplusmath/images/geoterms/16-e6bc16dcfc.gif"
    },
    {
      term: "Rhombus",
      meaning: "An equilateral parallelogram having oblique angles",
      image: "https://assets2.varsitytutors.com/vt-aplusmath/images/geoterms/17-ec170bdf2b.gif"
    },
    {
      term: "Parallel Line Segments",
      meaning: "Line segments that do not intersect",
      image: "https://assets2.varsitytutors.com/vt-aplusmath/images/geoterms/18-c3beb573d4.gif"
    },
    {
      term: "Quadrilateral",
      meaning: "A polygon with four sides",
      image: "https://assets2.varsitytutors.com/vt-aplusmath/images/geoterms/19-17ded296bd.gif"
    },
    {
      term: "Octagon",
      meaning: "A polygon having eight angles and eight sides",
      image: "https://assets2.varsitytutors.com/vt-aplusmath/images/geoterms/20-259a6bb7fe.gif"
    },
    {
      term: "Circle",
      meaning: "A closed plane curve consisting of all points at a given distance from a point within it called the center",
      image: "https://assets2.varsitytutors.com/vt-aplusmath/images/geoterms/21-8c6c961506.gif"
    },
    {
      term: "Trapezoid",
      meaning: "A quadrilateral plane figure having two parallel and two nonparallel sides",
      image: "https://assets2.varsitytutors.com/vt-aplusmath/images/geoterms/22-c4997773db.gif"
    },
    {
      term: "Ray",
      meaning: "The part of a straight line considered as originating at a point on the line and extending in one direction from that point",
      image: "https://assets2.varsitytutors.com/vt-aplusmath/images/geoterms/23-4e895db78d.gif"
    },
    {
      term: "Closed Curve",
      meaning: "A curve that is continuous and has endpoints that meet at the same point",
      image: "https://assets2.varsitytutors.com/vt-aplusmath/images/geoterms/24-e07a80a81c.gif"
    },
    {
      term: "Isosceles Triangle",
      meaning: "A triangle that has two sides equal",
      image: "https://assets2.varsitytutors.com/vt-aplusmath/images/geoterms/25-8c551e41d4.gif"
    },
    {
      term: "Hexagon",
      meaning: "A polygon having six sides and six angles",
      image: "https://assets2.varsitytutors.com/vt-aplusmath/images/geoterms/26-c51afa3c0d.gif"
    },
    {
      term: "Diameter",
      meaning: "A straight line passing through the center of a circle or sphere and meeting the circumference or surface at each end",
      image: "https://assets2.varsitytutors.com/vt-aplusmath/images/geoterms/27-d110602d0a.gif"
    },
    {
      term: "Obtuse Angle",
      meaning: "An angle greater than 90º but less than 180º",
      image: "https://assets2.varsitytutors.com/vt-aplusmath/images/geoterms/28-e93b0831ac.gif"
    }
  ];
  


export default function TheoremsList() {
    
  return (
    <List isShowingDetail searchBarPlaceholder="Search for Geometry Terms...">
      {termsArray.map((terms) => (
        
        <List.Item
          key={terms.term}
          title={terms.term}
          icon={Icon.Book}
          //accessories={[{ text: "Theorem"}]}
          actions={
            <ActionPanel>
              <Action.CopyToClipboard 
              title="Copy Term with Definition" 
              content= {`${terms.term} - ${terms.meaning}`}/>
              <Action.CopyToClipboard 
              title="Copy Only Term" 
              content= {terms.term}/>
              <Action.CopyToClipboard 
              title="Copy Only Definition" 
              content= {terms.meaning}/>
              <Action.OpenInBrowser url={`https://www.varsitytutors.com/aplusmath/homework-helper/geoterms`} />
            </ActionPanel>
          }
          detail={
            <List.Item.Detail 
            markdown={`# ${terms.term}\n>${terms.meaning}\n\n![Illustration](${terms.image})`} 
            />
          }
      
        />
      ))}
  </List>
  );
}