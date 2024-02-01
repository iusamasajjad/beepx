import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "../ui/checkbox"
export const Traits = () => {
  return (
    <div className="px-4 py-3">
      <p>Traits</p>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Maren Ekstrom Bothman</AccordionTrigger>
          <AccordionContent>
            <div className="flex justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="check1" />
                <label
                  htmlFor="check1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Dark purple
                </label>
              </div>
              <label htmlFor="check1">463</label>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="check2" />
                <label
                  htmlFor="check2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Cool gray
                </label>
              </div>
              <label htmlFor="check2">563</label>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Kadin Levin</AccordionTrigger>
          <AccordionContent>
            <div className="flex justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="check1" />
                <label
                  htmlFor="check1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Dark purple
                </label>
              </div>
              <label htmlFor="check1">463</label>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="check2" />
                <label
                  htmlFor="check2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Cool gray
                </label>
              </div>
              <label htmlFor="check2">563</label>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Jocelyn Press</AccordionTrigger>
          <AccordionContent>
            <div className="flex justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="check1" />
                <label
                  htmlFor="check1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Dark purple
                </label>
              </div>
              <label htmlFor="check1">463</label>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="check2" />
                <label
                  htmlFor="check2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Cool gray
                </label>
              </div>
              <label htmlFor="check2">563</label>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
