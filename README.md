# 🧠 OmniFocus AI Triage Assistant

A smart, semi-automated OmniFocus inbox triage system that uses OpenAI to intelligently categorize tasks, integrated with Alfred for fast, keyboard-driven access.

## ✨ Key Features

- **AI-Powered Categorization**: Automatically sorts tasks in the OmniFocus Inbox into appropriate projects based on task title and description using OpenAI.
- **Manual Review Mode**: Lets you approve or override AI-suggested projects before applying them.
- **YouTube Enrichment**: Detects YouTube-only tasks, fetches the video title & description, and replaces the task note with that info before moving to project.
- **"Unknown" Bucket**: Catches anything the AI can't confidently categorize so nothing falls through the cracks.
- **macOS Keychain Integration**: Securely stores and retrieves your OpenAI API key.
- **Alfred Workflow**: Instantly launch the plugin via Alfred using a hotkey or keyword, complete with visual feedback.
- **OmniFocus-Aware**: Automatically opens OmniFocus if it isn't running, so the plugin can do its job.

## 🚀 Getting Started

### Prerequisites

- macOS
- OmniFocus 4
- Alfred (optional, for keyboard-driven access)
- OpenRouter API key

#### Obtaining an OpenRouter API Key

1. Visit [OpenRouter's website](https://openrouter.ai/)
2. Click "Sign Up" or "Login" if you already have an account
3. Once logged in, navigate to your [API Keys page](https://openrouter.ai/keys)
4. Click "Create Key" to generate a new API key
5. Copy the generated key and store it securely
6. Use this key when configuring the plugin

The OpenRouter API key is required for the AI-powered categorization feature to work. The key is stored securely in your macOS Keychain and is only used for making API calls to OpenRouter's service.

### Installation

1. Download the latest release (when I eventually make a release workflow in github, until then, clone this and run "npm run build")
3. Double-click the `InboxSortViaAI.omnifocusjs` bundle to install
4. Configure your OpenAI API key in the plugin settings

### Plugin Settings

The plugin settings are accessed through a form that appears when you run the plugin or when you Ctrl click the automation. To configure the plugin:

1. Run the plugin using one of the methods described in the Weekly Review Workflow section
2. A settings form will appear where you can configure. You can get this on other runs by ctrl clicking:
   - **Unknown Tag Name**: The name for the "Unknown" bucket where unclassified tasks go
   - **Maximum Tasks**: How many tasks to process in one batch
   - **OpenRouter Model**: The AI model to use for classification
   - **Additional Context**: Custom instructions or context for the AI to consider when categorizing tasks
   - **API Key**: Your OpenRouter API key for accessing the AI service

#### Using Additional Context

The Additional Context field allows you to provide extra information to guide the AI in categorizing your tasks. This can be particularly useful for:

- **Personal Preferences**: "I prefer to keep work and personal tasks separate"
- **Project Organization**: "Programming tasks should go into technical projects"
- **Task Patterns**: "Tasks starting with 'Watch:' are usually educational content"
- **Custom Rules**: "Always put shopping-related tasks in the 'Shopping' project"

Example contexts:
```
I work as a software developer and prefer to organize my tasks by programming language. Put Python tasks in 'Python Projects' and JavaScript tasks in 'JS Projects'.
```
```
I'm a content creator. Tasks about video editing should go to 'Content Production' and research tasks to 'Content Research'.
```

The settings are automatically saved and will persist between plugin runs.

## 🔄 Weekly Review Workflow

The plugin is designed to be part of your weekly review process. Here's how to set it up:

### Option 1: OmniFocus Repeating Task

1. Create a New Task
	•	Title: Run weekly inbox triage
	•	Project: Anywhere you want (e.g., a "Weekly Review" project)
	•	Defer Date: Set it to the next triage day (e.g., next Monday)
	•	Repeat: Every 1 week

2. Attach a Plugin URL

OmniFocus plugins can be run via a custom URL scheme. Use this format:

omnifocus://localhost/plug-in-action?name=InboxSortViaAI&plugIn=InboxSortViaAI.omnifocusjs

	•	Paste this URL into the Note field of the task.

3. Click the Link When It's Time

Each week when the task comes due:
	•	Open the task
	•	Click the link
	•	The plugin runs and sorts your inbox using OpenRouter + rules + YouTube enrichment

⸻

🚀 Pro Tip

If you use an automation tool like Keyboard Maestro, Shortcuts, or Raycast, you can bind that plugin URL to a hotkey or automation to launch it even faster.

Here's how to do it:

⸻

✅ Bind OmniFocus Plugin to Alfred

1. Create a New Alfred Workflow
	•	Open Alfred Preferences
	•	Go to Workflows
	•	Click + (bottom left) → Blank Workflow
	•	Name it something like OmniFocus Triage
	•	Add a description if you like (e.g., "Runs OpenRouter-powered tag triage for OmniFocus Inbox")

⸻

2. Add a Trigger

Choose one of the following:
	•	Keyword: e.g., triage
	•	Hotkey: Optional, if you want to trigger with a key combo

Right-click in the workflow canvas and choose:
	•	Triggers → Keyword or Triggers → Hotkey

Set:
	•	Keyword: triage
	•	Title: Run OmniFocus Triage
	•	Subtitle: Something like Sort Inbox Tasks by Tags using AI
	•	Argument: Leave unchecked

⸻

3. Add a "Run Script" Action
	•	Right-click → Actions → Run Script
	•	Language: /bin/bash
	•	Script:

open "omnifocus://localhost/plug-in-action?name=InboxSortViaAI&plugIn=InboxSortViaAI.omnifocusjs"

Connect the Keyword/Hotkey node to the Run Script node.

⸻

4. Test It
	•	Press your keyword (triage) in Alfred
	•	Hit Enter
	•	OmniFocus should launch and run the plugin

⸻

🔒 Pro Tip

If you're using Alfred Powerpack, you can even show task status or AppleScript-driven feedback inside Alfred. Want to do that? I can give you a version that:
	•	Verifies OmniFocus is open
	•	Displays a notification or Alfred dialog once triage is complete

🔧 Enhanced Alfred Workflow Script

Step-by-step for the Run Script node:

1. Use /usr/bin/osascript for AppleScript

Set the Language to /usr/bin/osascript and paste this script:

-- Check if OmniFocus is running
tell application "System Events"
	if not (exists process "OmniFocus") then
		display dialog "Opening OmniFocus…" buttons {"OK"} giving up after 1
		tell application "OmniFocus" to activate
		delay 2
	end if
end tell

-- Open the plugin via URL
do shell script "open 'omnifocus://localhost/plug-in-action?name=InboxSortViaAI&plugIn=InboxSortViaAI.omnifocusjs'"

-- Optional: Notify user
display notification "AI Inbox triage started in OmniFocus." with title "Triage Plugin"


💡 Optional: Add Feedback in Alfred

Want a visible success message in Alfred itself? You can:

1. After the Run Script, add an Output → Post Notification
	•	Title: OmniFocus
	•	Text: Triage plugin launched.

or

2. Use Large Type

Right-click → Outputs → Large Type
	•	Message: Triage plugin launched! 🎯

Now when you run the Alfred keyword:
	•	OmniFocus launches if it's not running
	•	Your plugin starts automatically
	•	You see a notification that it worked


Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## 📄 License

[Add your license information here]
