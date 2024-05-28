"use client"
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function Home() {
  return (
    <div>
      <Tabs>
        <TabsList className="absolute top-0 right-0 p-4">
          <TabsTrigger value="Chocolate Chip">Chocolate Chip</TabsTrigger>
          <TabsTrigger value="Peanut Butter Cookies">Peanut Butter Cookies</TabsTrigger>
          <TabsTrigger value="Oatmeal Raisin Cookies">Oatmeal Raisin Cookies</TabsTrigger>
        </TabsList>
        <TabsContent value="Chocolate Chip" className="p-4">
          <Card>
            <CardHeader>
              <CardTitle>Chocolate Chip Cookies</CardTitle>
              <CardDescription>Delicious chocolate chip cookies.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-bold">Ingredients</p>
              <ul>
                <li>1 cup unsalted butter, softened</li>
                <li>1 cup granulated sugar</li>
                <li>1 cup packed brown sugar</li>
                <li>2 large eggs</li>
                <li>2 teaspoons vanilla extract</li>
                <li>3 cups all-purpose flour</li>
                <li>1 teaspoon baking soda</li>
                <li>1/2 teaspoon baking powder</li>
                <li>1 teaspoon salt</li>
                <li>2 cups semi-sweet chocolate chips</li>
              </ul>
              <br></br>
              <p className="font-bold">Instructions</p>
              <ol>
                <li>1. Preheat your oven to 350°F (175°C).</li>
                <li>2. In a large bowl, cream together the butter, 
                  granulated sugar, and brown sugar until smooth.</li>
                <li>3. Beat in the eggs one at a time, then stir in the vanilla.</li>
                <li>4. Dissolve the baking soda in hot water 
                  and add to the batter along with the salt.</li>
                <li>5. Gradually blend in the flour.</li>
                <li>6. Fold in the chocolate chips.</li>
                <li>7. Drop by large spoonfuls onto ungreased pans.</li>
                <li>8. Bake for about 10 minutes in the preheated oven, 
                  or until edges are nicely browned.</li>
              </ol>
            </CardContent>
            <CardFooter>
              <p>Enjoy with a glass of milk!</p>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="Peanut Butter Cookies" className="p-4">
          <Card>
            <CardHeader>
              <CardTitle>Peanut Butter Cookies</CardTitle>
              <CardDescription>Tasty peanut butter cookies.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src="/peanut-butter.jpg" alt="Peanut Butter Cookies" width={500} height={500} />
            </CardContent>
            <CardFooter>
              <p>Perfect for peanut butter lovers.</p>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="Oatmeal Raisin Cookies" className="p-4">
          <Card>
            <CardHeader>
              <CardTitle>Oatmeal Raisin Cookies</CardTitle>
              <CardDescription>Healthy oatmeal raisin cookies.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src="/oatmeal-raisin.jpg" alt="Oatmeal Raisin Cookies" width={500} height={500} />
            </CardContent>
            <CardFooter>
              <p>A great snack for any time of the day.</p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
