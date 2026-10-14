import SectionLayout from '../../components/SectionLayout'
import LivePractice from '../../components/LivePractice'
import Quiz from '../../components/Quiz'

export default function CommitMessagePractice() {
  return (
    <SectionLayout
      title="Commit Message Challenge"
      subtitle="Choose the best commit message. Instant feedback."
    >
      <LivePractice title="Practice Questions">
        <Quiz
          question="You fixed a bug that caused the login form to submit twice. Which message is best?"
          options={[
            {
              id: 'a',
              text: 'fix stuff',
              correct: false,
              feedback: 'Too vague. Future you (and teammates) will hate this.',
            },
            {
              id: 'b',
              text: 'fix: prevent double submission on login form',
              correct: true,
              feedback: 'Perfect. Uses conventional commits + describes the why.',
            },
            {
              id: 'c',
              text: 'Updated Login.tsx',
              correct: false,
              feedback: 'Describes the file, not the change. Avoid this.',
            },
          ]}
        />

        <Quiz
          question="You added a new dark-mode toggle. Best message?"
          options={[
            {
              id: 'a',
              text: 'feat: add dark mode toggle to settings',
              correct: true,
              feedback: 'Clear, conventional, and scoped.',
            },
            {
              id: 'b',
              text: 'dark mode',
              correct: false,
              feedback: 'Missing type and context.',
            },
            {
              id: 'c',
              text: 'WIP',
              correct: false,
              feedback: 'Never leave WIP in main history.',
            },
          ]}
        />

        <Quiz
          question="You fixed a typo in the README. Best message?"
          options={[
            {
              id: 'a',
              text: 'docs: fix typo in installation section',
              correct: true,
              feedback: 'Perfect. Uses docs: type and is specific.',
            },
            {
              id: 'b',
              text: 'typo',
              correct: false,
              feedback: 'Too short and unclear.',
            },
            {
              id: 'c',
              text: 'Update README.md',
              correct: false,
              feedback: 'Describes the file, not the actual change.',
            },
          ]}
        />
      </LivePractice>
    </SectionLayout>
  )
}
