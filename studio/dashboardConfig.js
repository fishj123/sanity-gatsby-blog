export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ce810ebe66082daa904e934',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-a89b3ood',
                  apiId: '0dd17b66-664c-4354-9436-e9fde59103c5'
                },
                {
                  buildHookId: '5ce810ebe14012a7281ad504',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-zbp6zw98',
                  apiId: 'c225a793-925a-4718-b94d-d1a98a9eaa3d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fishj123/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-zbp6zw98.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
