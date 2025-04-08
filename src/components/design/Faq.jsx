import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
  } from '@/components/ui/accordion';
  import { ChevronRight } from 'lucide-react';
  import { faqData } from '../../constants';

  function Faq() {
    // Array containing FAQ data
  
    return (
      <Accordion className="flex w-full flex-col  divide-y divide-zinc-700">
        {faqData.map(({ id, question, answer }) => (
          <AccordionItem key={id} value={id} className="py-2">
            <AccordionTrigger className="w-full py-0.5 text-left text-zinc-50">
              <div className="flex items-center">
                <ChevronRight className="h-4 w-4  transition-transform duration-200 group-data-[expanded]:rotate-90 text-zinc-50" />
                <div className="ml-2  text-zinc-50">{question}
                </div>
                
              </div>
            </AccordionTrigger>
            <AccordionContent className="origin-left">
              <p className="pl-6 pr-2 text-zinc-400">{answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }
  
  export default Faq;
  