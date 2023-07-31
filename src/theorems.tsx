import { ActionPanel, Action, Icon, List, Form } from "@raycast/api";
import { useState } from "react";


//this is for varun to do
/*
List of Theorems
1 If two angles are right angles, then they are congruent. 
2 If two angles are straight angles, then they are congruent. 
3 If a conditional statement is true, then the contrapositive of the statement is also true. (If p, then g &> If ~q, then ~p.) 
4 If angles are supplementary to the same angle, then they are congruent. 
5 If angles are supplementary to congruent angles, then they are congruent. 
6 If angles are complementary to the same angle, then they are congruent. 
7 If angles are complementary to congruent angles, then they are congruent. 
8 If a segment is added to two congruent segments, the sums are congruent. (Addition Property) 
9 If an angle is added to two congruent angles, the sums are congruent. (Addition Property) 
10 If congruent segments are added to congruent segments, the sums are congruent. (Addition Property)
11 If congruent angles are added to congruent angles, the sums are congruent. (Addi-tion Property) 
12 If a segment (or angle) is subtracted from congruent segments (or angles), the differences are congruent. (Subtraction Property) 
13 If congruent segments (or angles) are subtracted from congruent segments (or an-gles). the differences are congruent. (Subtraction Property) 
14 If segments (or angles) are congruent, their like multiples are congruent. (Multipli-cation Property) 
15 If segments (or angles) are congruent, their like divisions are congruent. (Division Property) 
16 If angles (or segments) are congruent to the same angle (or segment), they are congruent to each other. (Transitive Property) 
17 If angles (or segments) are congruent to congruent angles (or segments), they are congruent to each other. (Transitive Property) 
18 Vertical angles are congruent. 
19 All radii of a circle are congruent. 
20 If two sides of a triangle are congruent, the angles opposite the sides are congruent. (If As, then A.) 
21 If two angles of a triangle are congruent, the sides opposite the angles are congru. ent. (If A, then A.) 
22 If A - (X,. Y) and B - (X, Y). then the midpoint M - (X.. Y.) of AB can be found by using the midpoint formula: (+ x Y + Y) 
23 If two angles are both supplementary and congruent, then they are right angles. 
24 If two points are each equidistant from the endpoints of a segment, then the two points determine the perpendicular bisector of that segment. 
25 If a point is on the perpendicular bisector of a segment, then it is equidistant from the endpoints of that segment. 
26 If two nonvertical lines are parallel, then their slopes are equal. 
27 If the slopes of two nonvertical lines are equal, then the lines are parallel. 
28 If two lines are perpendicular and neither is vertical, each line's slope is the opposite reciprocal of the other's. 
29 If a line's slope is the opposite reciprocal of another line's slope, the two lines are perpendicular. 
30 The measure of an exterior angle of a triangle is greater than the measure of either remote interior angle.
-------------------------------------------------------------------------------

*/
interface Theorems {
  title: string;
  description: string;
  url: string;
  formula: string;
  image: string;
}
const theoremArray: Theorems[] = [
  {
  title: "Right Angle Congruence",
  description: "If two angles are right angles, then they are congruent.",
  url: "https://byjus.com/maths/right-triangle-congruence-theorem/",
  formula: "∠B = ∠P",
  image: "https://cdn1.byjus.com/wp-content/uploads/2022/07/Right-Triangle-Congruence-Theorem-2.png"
  },
  {
  title: "Straight Angles Congruence",
  description: "If two angles are straight angles, then they are congruent.",
  url: "https://collegedunia.com/exams/straight-angle-mathematics-articleid-5387",
  formula: "straight ∠ = another straight ∠",
  image: "https://images.collegedunia.com/public/image/c8ade319619a4c239447bd219deb8a1d.png"
  },
  {
  title: "Contrapositive",
  description: "If a conditional statement is true, then the contrapositive of the statement is also true. (If p, then q -> If ~q, then ~p.)",
  url: "https://www.varsitytutors.com/hotmath/hotmath_help/topics/converse-inverse-contrapositive",
  formula: "If not q, then not p",
  image: "https://i.stack.imgur.com/RD39T.png"
  },
  {
  title: "Supplementary Angles (Transitive)",
  description: "If angles are supplementary to the same angle, then they are congruent.",
  url: "https://www.storyofmathematics.com/congruent-supplementary-angles/",
  formula: "if a=b and b=c, then a=c",
  image: "https://i.ibb.co/0nz5Fpg/SCR-20230729-ptvr.png"
  },
  {
  title: "Congruent Supplements (Substitution)",
  description: "If angles are supplementary to congruent angles, then they are congruent.",
  url: "https://www.geogebra.org/m/hhnrcmzz",
  formula: "if b supp a, and c supp a, then b=c",
  image: "https://www.geogebra.org/resource/sgmqffja/ILjBLm7HC5QUqoU4/material-sgmqffja.png"
  },
  {
  title: "Complimentary Angles (Transitive)",
  description: "If angles are complementary to the same angle, then they are congruent.",
  url: "https://www.dummies.com/article/academics-the-arts/math/geometry/how-to-prove-angles-are-complementary-or-supplementary-190899/",
  formula: "if a=b and b=c, then a=c",
  image: "https://www.dummies.com/wp-content/uploads/220347.image0.jpg"
  },
  {
  title: "Congruent Complements (Substitution)",
  description: "If angles are complementary to congruent angles, then they are congruent.",
  url: "https://www.dummies.com/article/academics-the-arts/math/geometry/how-to-prove-angles-are-complementary-or-supplementary-190899/",
  formula: "if b comp a, and c comp a, then b=c",
  image: "https://www.geogebra.org/resource/b6etjwjy/XRGR6eNIbVIpFeV3/material-b6etjwjy.png"
  },
  {
  title: "Addition Property with Segments",
  description: "If a segment is added to two congruent segments, the sums are congruent. (Addition Property)",
  url: "https://www.cuemath.com/algebra/addition-property-of-equality/",
  formula: "A=B; A+n=B+n",
  image: "https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/addition-property-of-equality-1645080886.png"
  },
  {
  title: "Addition Property with Angles",
  description: "If an angle is added to two congruent angles, the sums are congruent. (Addition Property)",
  url: "https://baroody.org/GeometryHonors/Class%20Notes/Chapter%202/Lesson2-5/Lesson2-5.html",
  formula: "∠A=∠B; ∠A+∠n=∠B+∠n",
  image: "https://baroody.org/GeometryHonors/Class%20Notes/Chapter%202/Lesson2-5/theorem9Proof.gif"
  },
  {
  title: "Addition Property with Congruent Segments",
  description: "If congruent segments are added to congruent segments, the sums are congruent. (Addition Property)",
  url: "https://baroody.org/GeometryHonors/Class%20Notes/Chapter%202/Lesson2-5/Lesson2-5.html",
  formula: "A=B, C=D; A+C=B+D",
  image: "https://i.ibb.co/GtzS1VL/SCR-20230729-qaab.png"
  },
  {
  title: "Addition Property with Congruent Angles",
  description: "If congruent angles are added to congruent angles, the sums are congruent. (Addition Property)",
  url: "https://virtuallearningacademy.net/VLA/LessonDisplay/Lesson3418/MATHGEOU05Properites_Angles.pdf",
  formula: "m∠KLP+m∠PLN =m∠KNP + m∠PNL m∠KLN = m∠KNL", 
  image: "https://i.ibb.co/QNSvZpR/SCR-20230729-qfrq.png"
  },
  {
  title: "Subtraction Property with Segments or Angles",
  description: "If a segment (or angle) is subtracted from congruent segments (or angles), the differences are congruent. (Subtraction Property)",
  url: "https://virtuallearningacademy.net/VLA/LessonDisplay/Lesson3418/MATHGEOU05Properites_Angles.pdf",
  formula: "MP-NP = NO-NP; MN = PQ",
  image: "https://i.ibb.co/J28WcSJ/SCR-20230729-qhdb.png"
  },
  {
  title: "Subtraction Property with Congruent Segments or Angles",
  description: "If congruent segments (or angles) are subtracted from congruent segments (or angles), the differences are congruent. (Subtraction Property)",
  url: "https://virtuallearningacademy.net/VLA/LessonDisplay/Lesson3418/MATHGEOU05Properites_Angles.pdf",
  formula: "m∠ACB-m∠GCB=m∠GCH-m∠GCB; m∠ACG = m∠BCH",
  image: "https://i.ibb.co/QjLgV5q/SCR-20230729-qico.png"
  },
  {
  title: "Multiplication Property",
  description: "If segments (or angles) are congruent, their like multiples are congruent. (Multiplication Property)",
  url: "https://virtuallearningacademy.net/VLA/LessonDisplay/Lesson3418/MATHGEOU05Properites_Angles.pdf",
  formula: "",
  image: "https://i.ibb.co/DzwZPg8/SCR-20230729-qjad.png"
  },
  {
  title: "Division Property",
  description: "If segments (or angles) are congruent, their like divisions are congruent. (Division Property)",
  url: "https://blank.page/",
  formula: "",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1200px-HD_transparent_picture.png"
  },
  {
  title: "Transitive Property with Angles or Segments",
  description: "If angles (or segments) are congruent to the same angle (or segment), they are congruent to each other. (Transitive Property)",
  url: "https://blank.page/",
  formula: "",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1200px-HD_transparent_picture.png"
  },
  {
  title: "Transitive Property with Congruent Angles or Segments",
  description: "If angles (or segments) are congruent to congruent angles (or segments), they are congruent to each other. (Transitive Property)",
  url: "https://blank.page/",
  formula: "",
  image: ""
  },
  {
  title: "Vertical Angles Congruence",
  description: "Vertical angles are congruent.",
  url: "",
  formula: "",
  image: ""
  },
  {
  title: "Congruent Radii",
  description: "All radii of a circle are congruent.",
  url: "",
  formula: "",
  image: ""
  },
  {
  title: "Congruent Sides and Opposite Angles",
  description: "If two sides of a triangle are congruent, the angles opposite the sides are congruent. (If A, then A.)",
  url: "",
  formula: "",
  image: ""
  },
  {
  title: "Congruent Angles and Opposite Sides",
  description: "If two angles of a triangle are congruent, the sides opposite the angles are congruent. (If A, then A.)",
  url: "",
  formula: "",
  image: ""
  },
  {
  title: "Midpoint Formula",
  description: "If A(X₁, Y₁) and B(X₂, Y₂), then the midpoint M(Xₘ, Yₘ) of AB can be found by using the midpoint formula: (Xₘ = (X₁ + X₂)/2, Yₘ = (Y₁ + Y₂)/2)",
  url: "",
  formula: "",
  image: ""
  },
  {
  title: "Supplementary and Congruent Angles are Right Angles",
  description: "If two angles are both supplementary and congruent, then they are right angles.",
  url: "",
  formula: "",
  image: ""
  },
  {
  title: "Perpendicular Bisector with Equidistant Points",
  description: "If two points are each equidistant from the endpoints of a segment, then the two points determine the perpendicular bisector of that segment.",
  url: "",
  formula: "",
  image: ""
  },
  {
  title: "Equidistance from Perpendicular Bisector",
  description: "If a point is on the perpendicular bisector of a segment, then it is equidistant from the endpoints of that segment.",
  url: "",
  formula: "",
  image: ""
  },
  {
  title: "Parallel Lines and Equal Slopes",
  description: "If two nonvertical lines are parallel, then their slopes are equal.",
  url: "",
  formula: "",
  image: ""
  },
  {
  title: "Equal Slopes and Parallel Lines",
  description: "If the slopes of two nonvertical lines are equal, then the lines are parallel.",
  url: "",
  formula: "",
  image: ""
  },
  {
  title: "Perpendicular Lines and Opposite Reciprocal Slopes",
  description: "If two lines are perpendicular and neither is vertical, each line's slope is the opposite reciprocal of the other's.",
  url: "",
  formula: "",
  image: ""
  },
  {
  title: "Opposite Reciprocal Slopes and Perpendicular Lines",
  description: "If a line's slope is the opposite reciprocal of another line's slope, the two lines are perpendicular.",
  url: "",
  formula: "",
  image: ""
  },
  {
  title: "Exterior Angle Inequality",
  description: "The measure of an exterior angle of a triangle is greater than the measure of either remote interior angle.",
  url: "",
  formula: "",
  image: ""
  }
  ];


export default function TheoremsList() {
  return (
    <List isShowingDetail searchBarPlaceholder="Search for Geometry Theorems...">
      {theoremArray.map((theorem) => (
        <List.Item
          key={theorem.title}
          title={theorem.title}
          icon={Icon.Ruler}
          //accessories={[{ text: "Theorem"}]}
          actions={
            <ActionPanel>
              <Action.OpenInBrowser url={theorem.url} />
            </ActionPanel>
          }
          detail={
            <List.Item.Detail 
            markdown={`# ${theorem.title}\n>${theorem.description}\n\n![Illustration](${theorem.image})`}
            metadata = {
              <List.Item.Detail.Metadata>
              <List.Item.Detail.Metadata.Label title="Formula:" text = {theorem.formula} />
              <List.Item.Detail.Metadata.TagList title="Concepts">
                <List.Item.Detail.Metadata.TagList.Item text="Uses Common Sense" color={"#eed535"} />
              </List.Item.Detail.Metadata.TagList>
              </List.Item.Detail.Metadata>
              
              
            }
            />
          }
      
        />
      ))}
  </List>
  );
}
