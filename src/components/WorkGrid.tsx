"use client";

import { useEffect, useState } from "react";

export default function WorkGrid() {

  const [repos, setRepos] = useState([]);

  // const myWork = [
  //   "react-and-ts-colors-Ch0mpCh0mp",
  //   "react-typescript-tasks-Ch0mpCh0mp",
  //   "reb-06-exercises-Ch0mpCh0mp",
  //   "usereducer-react-ts-Ch0mpCh0mp",
  // ]

 useEffect(() => {
  fetch("https://api.github.com/users/Ch0mpCh0mp/repos?sort=updated&per_page=6")
    .then((r) => (r.ok ? r.json() : []))
    .then((list) => {
      const goThrough = list
        .filter((repo: any) => !repo.fork)
        .map((repo: any) => ({
          name: repo.name,
          description: repo.description,
          url: repo.html_url,
          homepage: repo.homepage || null,
          language: repo.language,
          stars: repo.stargazers_count,
        }));
      setRepos(goThrough);
    })
    .catch(console.error);
}, []);


  return (
    <section id="work" className="min-h-screen bg-navy">
      <p aria-label="Work" className="work font-majorMono text-deeppink text-9xl lg:text-[12rem] text-center pt-12 md:pt-6 lg:pt-24 l">
        <span style={{ "--i": 1 }}>W</span>
        <span style={{ "--i": 2 }}>O</span>
        <span style={{ "--i": 3 }}>R</span>
        <span style={{ "--i": 4 }}>K</span>
      </p>

      <div className="mx-auto pt-20 md:pt-7 max-w-7xl p-6 lg:p-8 grid gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:pt-24 ">
        {repos.map((p) => (
          <article key={p.name} className="rounded-2xl bg-white/5 p-5 lg:p-5 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold text-center text-deeppink">{p.name}</h3>
            <p className="text-sm text-white/70 mt-2">{p.description || "Keine Beschreibung vorhanden"}</p>
            <div className="mt-3 text-xs text-white/60 flex gap-4">
              {p.language && <span>{p.language}</span>}
              <span>★ {p.stars}</span>
            </div>
            <div className="mt-4 flex gap-3">
              <a className="underline text-deeppink" href={p.url} target="_blank" rel="noreferrer">
                Code
              </a>
              {p.homepage && (
                <a className="underline text-deeppink" href={p.homepage} target="_blank" rel="noreferrer">
                  Live
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
      {repos.length === 0 && (
  <p className="px-6 text-white/70 text-center">
    No Repositories found
  </p>
)}


    </section>
  );
}




//   useEffect(() => {
//     Promise.all(
//       myWork.map((name) => fetch(`https://api.github.com/repos/dci-fbw-wd25-d01/${name}`).then((r) => r.json()))
//     )
//     .then((data) => {
//       const goTrough = data.map((repo) => ({
//         name: repo.name,
//         description: repo.description,
//         url: repo.html_url,
//         homepage: repo.homepage ? repo.homepage.startsWith("http") ? repo.homepage : `https://${repo.homepage}` : null, 
//         language: repo.language,
//         stars: repo.stargazers_count,
//       }))
//       setRepos(goThrough);
//     })
//     .catch(console.error);
//   }, [])

//   return (
//     <section id="work" className="min-h-screen bg-navy">
//       <p aria-label="Work" className="work font-majorMono text-deeppink text-9xl text-center pt-12">
//         <span style={{ "--i": 1 }}>W</span>
//         <span style={{ "--i": 2 }}>O</span>
//         <span style={{ "--i": 3 }}>R</span>
//         <span style={{ "--i": 4 }}>K</span>
//       </p>

//       <div className="mx-auto max-w-6xl p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {repos.map((p) => (
//           <article key={p.name} className="rounded-2xl bg-white/5 p-5 hover:bg-white/10 transition">
//             <h3 className="text-xl font-semibold text-white">{p.name}</h3>
//             <p className="text-sm text-white/70 mt-2">{p.description || "Keine Beschreibung vorhanden"}</p>
//             <div className="mt-3 text-xs text-white/60 flex gap-4">
//               {p.language && <span>{p.language}</span>}
//               <span>★ {p.stars}</span>
//             </div>
//             <div className="mt-4 flex gap-3">
//               <a className="underline text-deeppink" href={p.url} target="_blank" rel="noreferrer">
//                 Code
//               </a>
//               {p.homepage && (
//                 <a className="underline text-deeppink" href={p.homepage} target="_blank" rel="noreferrer">
//                   Live
//                 </a>
//               )}
//             </div>
//           </article>
//         ))}
//       </div>

//     </section>
//   );
// }
