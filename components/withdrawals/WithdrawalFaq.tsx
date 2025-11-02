import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { HelpCircle } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: 'How long does a withdrawal take?',
    answer:
      'We try to process all withdrawal requests within 30 minutes. However, withdrawals can take up to 2-3 hours to process when many transactions are taking place on the blockchain network.',
  },
  {
    id: 2,
    question: 'What is the minimum withdrawal amount?',
    answer:
      'The minimum withdrawal amount is $50. Maximum withdrawal per transaction is $50,000.',
  },
  {
    id: 3,
    question: 'Are there any withdrawal fees?',
    answer:
      'We charge a small processing fee of 2% on all withdrawals to cover blockchain network fees and processing costs.',
  },
  {
    id: 4,
    question: 'Do I need to verify my account?',
    answer:
      'Yes, account verification is required for withdrawals. This helps us ensure the security of your funds and comply with regulatory requirements.',
  },
  {
    id: 5,
    question: 'Why is my withdrawal pending?',
    answer:
      'Withdrawals may be pending for security verification, especially for first-time withdrawals or large amounts. Our team reviews these manually to protect your account.',
  },
  {
    id: 6,
    question: 'How many confirmations are needed?',
    answer:
      'Bitcoin withdrawals need 3 confirmations, Ethereum needs 12, and USDT (both ERC20 and TRC20) needs 12 confirmations on their respective networks.',
  },
  {
    id: 7,
    question: 'Can I cancel a withdrawal?',
    answer:
      'You can cancel a withdrawal request if it\'s still in "Pending" status. Once it\'s marked as "Processing" or "Completed", it cannot be canceled.',
  },
]

export function WithdrawalFaq() {
  return (
    <Card className="border-border/50 h-fit">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <HelpCircle className="w-5 h-5 text-primary" />
          </div>
          <div>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>
              Everything you need to know about withdrawals
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem
              value={faq.id.toString()}
              key={faq.id}
              className="border-border/50"
            >
              <AccordionTrigger className="text-left hover:text-primary transition-colors hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
