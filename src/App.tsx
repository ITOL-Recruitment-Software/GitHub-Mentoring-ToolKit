import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Intro from './pages/Intro'
import ReadyForClass from './pages/ReadyForClass'
import WhatIsGithub from './pages/WhatIsGithub'
import GithubFlow from './pages/GithubFlow'
import Setup from './pages/Setup'
import WorkingLocally from './pages/WorkingLocally'
import Branching from './pages/Branching'
import Status from './pages/Status'
import AddCommit from './pages/AddCommit'
import CommitMessages from './pages/CommitMessages'
import Collaboration from './pages/Collaboration'
import PullRequests from './pages/PullRequests'
import EditingOnGithub from './pages/EditingOnGithub'
import Merge from './pages/Merge'
import LocalHistory from './pages/LocalHistory'
import Aliases from './pages/Aliases'
import Conflicts from './pages/Conflicts'
import WorkflowReview from './pages/WorkflowReview'
import ProtectedBranches from './pages/ProtectedBranches'
import GitBisect from './pages/GitBisect'
import Reverting from './pages/Reverting'
import HelpfulCommands from './pages/HelpfulCommands'
import ViewingChanges from './pages/ViewingChanges'
import TagsReleases from './pages/TagsReleases'
import WorkflowDiscussion from './pages/WorkflowDiscussion'
import LocalRepo from './pages/LocalRepo'
import FixingCommits from './pages/FixingCommits'
import GitReset from './pages/GitReset'
import CherryPick from './pages/CherryPick'
import MergeStrategies from './pages/MergeStrategies'
import Readme from './pages/Readme'
import Gitignore from './pages/Gitignore'
import Issues from './pages/Issues'
import Projects from './pages/Projects'
import RepoStructure from './pages/RepoStructure'
import Actions from './pages/Actions'
import Mistakes from './pages/Mistakes'
import BestPractices from './pages/BestPractices'
import Appendix from './pages/Appendix'

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-[var(--color-github-dark)]">
        <Sidebar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/ready-for-class" element={<ReadyForClass />} />
            <Route path="/what-is-github" element={<WhatIsGithub />} />
            <Route path="/github-flow" element={<GithubFlow />} />
            <Route path="/setup" element={<Setup />} />
            <Route path="/working-locally" element={<WorkingLocally />} />
            <Route path="/branching" element={<Branching />} />
            <Route path="/status" element={<Status />} />
            <Route path="/add-commit" element={<AddCommit />} />
            <Route path="/commit-messages" element={<CommitMessages />} />
            <Route path="/collaboration" element={<Collaboration />} />
            <Route path="/pull-requests" element={<PullRequests />} />
            <Route path="/editing-on-github" element={<EditingOnGithub />} />
            <Route path="/merge" element={<Merge />} />
            <Route path="/local-history" element={<LocalHistory />} />
            <Route path="/aliases" element={<Aliases />} />
            <Route path="/conflicts" element={<Conflicts />} />
            <Route path="/workflow-review" element={<WorkflowReview />} />
            <Route path="/protected-branches" element={<ProtectedBranches />} />
            <Route path="/git-bisect" element={<GitBisect />} />
            <Route path="/reverting" element={<Reverting />} />
            <Route path="/helpful-commands" element={<HelpfulCommands />} />
            <Route path="/viewing-changes" element={<ViewingChanges />} />
            <Route path="/tags-releases" element={<TagsReleases />} />
            <Route path="/workflow-discussion" element={<WorkflowDiscussion />} />
            <Route path="/local-repo" element={<LocalRepo />} />
            <Route path="/fixing-commits" element={<FixingCommits />} />
            <Route path="/git-reset" element={<GitReset />} />
            <Route path="/cherry-pick" element={<CherryPick />} />
            <Route path="/merge-strategies" element={<MergeStrategies />} />
            <Route path="/readme" element={<Readme />} />
            <Route path="/gitignore" element={<Gitignore />} />
            <Route path="/issues" element={<Issues />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/repo-structure" element={<RepoStructure />} />
            <Route path="/actions" element={<Actions />} />
            <Route path="/mistakes" element={<Mistakes />} />
            <Route path="/best-practices" element={<BestPractices />} />
            <Route path="/appendix" element={<Appendix />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
