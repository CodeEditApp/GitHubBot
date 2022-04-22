/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
 module.exports = (app) => {
  app.on(["issues.opened"], async (context) => {

    const owner = context.payload.issue.user.login
    const repo = context.payload.repository.name
    const issueNumber = context.payload.issue.number
    const labels = context.payload.issue.labels
    const title = context.payload.issue.title

    var issue = ""

    if (labels.find(e => e.name === 'bug')) {
      issue = context.issue({
        owner: owner,
        repo: repo,
        issue_number: issueNumber,
        title: "🐞 " + title
      })
    } else if (labels.find(e => e.name === 'enhancement')) {
      issue = context.issue({
        owner: owner,
        repo: repo,
        issue_number: issueNumber,
        title: "✨ " + title
      })
    } else if (labels.find(e => e.name === 'feature request')) {
      issue = context.issue({
        owner: owner,
        repo: repo,
        issue_number: issueNumber,
        title: "💡 " + title
      })
    } else if (labels.find(e => e.name === 'discussion')) {
      issue = context.issue({
        owner: owner,
        repo: repo,
        issue_number: issueNumber,
        title: "💬 " + title
      })
    } else if (labels.find(e => e.name === 'question')) {
      issue = context.issue({
        owner: owner,
        repo: repo,
        issue_number: issueNumber,
        title: "❓ " + title
      })
    } else if (labels.find(e => e.name === 'priority')) { 
      issue = context.issue({
        owner: owner,
        repo: repo,
        issue_number: issueNumber,
        title: "🚩 " + title
      })
    } else if (labels.find(e => e.name === 'feedback')) {
      issue = context.issue({
        owner: owner,
        repo: repo,
        issue_number: issueNumber,
        title: "📬 " + title
      })
    } else if (labels.find(e => e.name === 'urgent')) {
      issue = context.issue({
        owner: owner,
        repo: repo,
        issue_number: issueNumber,
        title: "🚨 " + title
      })
    }

    return context.octokit.issues.update(issue);
  });
};
