<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the public marketing site in file-based TanStack routes with catalogue data centralized in `src/lib/catalogue.ts`, so all service pages share the same source.
- Store public enquiries via a validated server function and restricted Cloud table, so visitor contact details are never readable in the browser.
- Use CSS perspective transforms and generated imagery for visual depth instead of WebGL, to keep the site lightweight on mobile.
- Keep industry and integration destination data in the shared catalogue so navigation and detail pages stay synchronized.
- Store optional industry and monthly lead volume inside the existing enquiry message until a schema change is needed, avoiding disruption of the working submission table.
- Keep the 12 lead integration discovery entries in the shared catalogue and route each to an honest detail page; do not imply setup exists until a real connection flow is verified.

- Keep button interactions in the shared Button class and global semantic CSS tokens, so all CTA variants share accessible states without changing layout.
- Keep workflow recommendation calls in server-only AI SDK Responses helpers, with directory-grounded structured results and no visitor history storage, so recommendations cannot expose credentials or invent connections.
- Use a server-only persistent AI guard for public recommendation spending limits and terminal service pauses; never store visitor input in that guard.
