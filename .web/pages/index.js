/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { EventLoopContext } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { Box as RadixThemesBox, Card as RadixThemesCard, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Grid as RadixThemesGrid, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import { Box, Divider, HStack, Link } from "@chakra-ui/react"
import NextLink from "next/link"
import NextHead from "next/head"



export function Fragment_1762bb90abdb81b879b2a22edbbe01a1 () {
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <RadixThemesDialog.Root open={connectError !== null}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`}>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {getBackendURL(env.EVENT).href}
</RadixThemesText>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_1762bb90abdb81b879b2a22edbbe01a1/>
  <HStack alignItems={`flex-start`} sx={{"transition": "left 0.5s, width 0.5s", "position": "relative"}}>
  <RadixThemesFlex align={`start`} css={{"position": "fixed", "top": "0px", "backgroundColor": "#F8F6F5", "padding": "1em", "height": "4em", "width": "100%", "zIndex": "0", "marginTop": "0.9em", "flexDirection": "row"}} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <RadixThemesText as={`p`} css={{"marginLeft": "3em", "fontSize": "1.3em", "fontWeight": 500}}>
  {`Home`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"marginLeft": "3em", "fontSize": "1.3em", "fontWeight": 500}}>
  {`Grades`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"marginLeft": "3em", "fontSize": "1.3em", "fontWeight": 500}}>
  {`Account`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <Link as={NextLink} href={`/`}>
  <img css={{"width": "6.5em", "height": "2em", "marginLeft": "14em"}} src={`https://i.ibb.co/nj8t8Yn/grade-AILogo.png`}/>
</Link>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesBox css={{"height": "2.2em", "color": "#6F6D7B", "background": "#FEFEFD", "width": "20em", "borderRadius": "28px", "marginRight": "5em"}}>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <img css={{"width": "3em", "height": "1.4em", "marginLeft": "0.3em", "marginTop": "0.4em", "marginRight": "-0.5em"}} src={`http://localhost:3000/glass.svg`}/>
  <RadixThemesText as={`p`} css={{"color": "#6F6D7B", "marginTop": "0.25em"}}>
  {`Search classes...`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>
  <Box sx={{"paddingTop": "5em", "paddingInlineStart": ["auto", "2em"], "paddingInlineEnd": ["auto", "2em"], "flex": "1", "backgroundColor": "#F8F6F5"}}>
  <Box sx={{"alignItems": "flex-start", "borderRadius": "0.375rem", "padding": "1em", "marginBottom": "2em"}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"marginLeft": "0.1em", "marginTop": "1.7em", "fontWeight": 500, "fontSize": "1.4em", "marginBottom": "0.5em"}}>
  {`Courses`}
</RadixThemesText>
  <RadixThemesGrid columns={`3`} css={{"width": "100%", "borderRadius": "0em"}} gap={`4`}>
  <RadixThemesCard asChild={true} css={{"height": "40vh"}}>
  <Link as={NextLink} href={`/assignment`} sx={{"textDecoration": "none"}}>
  <RadixThemesFlex justify={`between`}>
  <RadixThemesBox>
  <RadixThemesFlex>
  <img css={{"width": "1.6em", "height": "1.6em", "marginTop": "0.7em", "marginRight": "0.3em", "color": "#cb997e"}} src={`calculator.svg`}/>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"fontSize": "2em", "fontWeight": "bold", "fontFamily": "Work Sans"}}>
  {`MATH 61`}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesBox>
  <RadixThemesFlex>
  <img css={{"width": "2em", "height": "2em", "marginTop": "0.5em"}} src={`friends.svg`}/>
  <RadixThemesText as={`p`} css={{"marginTop": "0.7em"}}>
  {`271`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesText as={`p`} css={{"marginLeft": "0.2em", "marginTop": "-0.4em", "fontFamily": "Work Sans"}}>
  {`Introduction to Discrete Structures`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"marginLeft": "0.2em", "marginTop": "-0.2em", "fontFamily": "Work Sans"}}>
  {`5 assignments, 1 Exam`}
</RadixThemesText>
  <Divider sx={{"marginTop": "0.5em", "width": "45em", "marginLeft": "-10em"}}/>
  <img css={{"width": "35em", "height": "12em", "marginTop": "-2em"}} src={`wavyred.png`}/>
</Link>
</RadixThemesCard>
  <RadixThemesCard asChild={true} css={{"height": "40vh"}}>
  <Link as={NextLink} href={`/dashboard`} sx={{"textDecoration": "none"}}>
  <RadixThemesFlex justify={`between`}>
  <RadixThemesBox>
  <RadixThemesFlex>
  <img css={{"width": "1.6em", "height": "1.6em", "marginTop": "0.7em", "marginRight": "0.3em", "color": "#cb997e"}} src={`shower.svg`}/>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"fontSize": "2em", "fontWeight": "bold", "fontFamily": "Work Sans"}}>
  {`LIFE 142`}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesBox>
  <RadixThemesFlex>
  <img css={{"width": "2em", "height": "2em", "marginTop": "0.5em"}} src={`friends.svg`}/>
  <RadixThemesText as={`p`} css={{"marginTop": "0.7em"}}>
  {`400`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesText as={`p`} css={{"marginLeft": "0.2em", "marginTop": "-0.4em", "fontFamily": "Work Sans"}}>
  {`Shower Techniques`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"marginLeft": "0.2em", "marginTop": "-0.2em", "fontFamily": "Work Sans"}}>
  {`0 assignments, 0 Exams`}
</RadixThemesText>
  <Divider sx={{"marginTop": "0.5em", "width": "45em", "marginLeft": "-10em"}}/>
  <img css={{"width": "35em", "height": "12em", "marginTop": "-2em"}} src={`wavyorange.png`}/>
</Link>
</RadixThemesCard>
  <RadixThemesCard asChild={true} css={{"height": "40vh"}}>
  <Link as={NextLink} href={`/dashboard`} sx={{"textDecoration": "none"}}>
  <RadixThemesFlex justify={`between`}>
  <RadixThemesBox>
  <RadixThemesFlex>
  <img css={{"width": "1.6em", "height": "1.6em", "marginTop": "0.7em", "marginRight": "0.3em", "color": "#cb997e"}} src={`couple.svg`}/>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"fontSize": "2em", "fontWeight": "bold", "fontFamily": "Work Sans"}}>
  {`LOVE 96`}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesBox>
  <RadixThemesFlex>
  <img css={{"width": "2em", "height": "2em", "marginTop": "0.5em"}} src={`friends.svg`}/>
  <RadixThemesText as={`p`} css={{"marginTop": "0.7em"}}>
  {`69`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesText as={`p`} css={{"marginLeft": "0.2em", "marginTop": "-0.4em", "fontFamily": "Work Sans"}}>
  {`Introduction to Finding Love`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"marginLeft": "0.2em", "marginTop": "-0.2em", "fontFamily": "Work Sans"}}>
  {`2 assignments, 0 Exams`}
</RadixThemesText>
  <Divider sx={{"marginTop": "0.5em", "width": "45em", "marginLeft": "-10em"}}/>
  <img css={{"width": "35em", "height": "12em", "marginTop": "-2em"}} src={`wavyyellow.png`}/>
</Link>
</RadixThemesCard>
  <RadixThemesCard asChild={true} css={{"height": "40vh"}}>
  <Link as={NextLink} href={`/dashboard`} sx={{"textDecoration": "none"}}>
  <RadixThemesFlex justify={`between`}>
  <RadixThemesBox>
  <RadixThemesFlex>
  <img css={{"width": "1.6em", "height": "1.6em", "marginTop": "0.7em", "marginRight": "0.3em", "color": "#cb997e"}} src={`house.svg`}/>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"fontSize": "2em", "fontWeight": "bold", "fontFamily": "Work Sans"}}>
  {`LIFE 112B`}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesBox>
  <RadixThemesFlex>
  <img css={{"width": "2em", "height": "2em", "marginTop": "0.5em"}} src={`friends.svg`}/>
  <RadixThemesText as={`p`} css={{"marginTop": "0.7em"}}>
  {`115`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesText as={`p`} css={{"marginLeft": "0.2em", "marginTop": "-0.4em", "fontFamily": "Work Sans"}}>
  {`Leaving the House: Advanced Methods`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"marginLeft": "0.2em", "marginTop": "-0.2em", "fontFamily": "Work Sans"}}>
  {`12 assignments, 2 Exams`}
</RadixThemesText>
  <Divider sx={{"marginTop": "0.5em", "width": "45em", "marginLeft": "-10em"}}/>
  <img css={{"width": "35em", "height": "12em", "marginTop": "-2em"}} src={`wavygreen.png`}/>
</Link>
</RadixThemesCard>
  <RadixThemesCard asChild={true} css={{"height": "40vh"}}>
  <Link as={NextLink} href={`/dashboard`} sx={{"textDecoration": "none"}}>
  <RadixThemesFlex justify={`between`}>
  <RadixThemesBox>
  <RadixThemesFlex>
  <img css={{"width": "1.6em", "height": "1.6em", "marginTop": "0.7em", "marginRight": "0.3em", "color": "#cb997e"}} src={`segment.svg`}/>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"fontSize": "2em", "fontWeight": "bold", "fontFamily": "Work Sans"}}>
  {`MATH 288`}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesBox>
  <RadixThemesFlex>
  <img css={{"width": "2em", "height": "2em", "marginTop": "0.5em"}} src={`friends.svg`}/>
  <RadixThemesText as={`p`} css={{"marginTop": "0.7em"}}>
  {`43`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesText as={`p`} css={{"marginLeft": "0.2em", "marginTop": "-0.4em", "fontFamily": "Work Sans"}}>
  {`Graduate Geometric Topology`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"marginLeft": "0.2em", "marginTop": "-0.2em", "fontFamily": "Work Sans"}}>
  {`1 assignments, 0 Exams`}
</RadixThemesText>
  <Divider sx={{"marginTop": "0.5em", "width": "45em", "marginLeft": "-10em"}}/>
  <img css={{"width": "35em", "height": "12em", "marginTop": "-2em"}} src={`wavysage.png`}/>
</Link>
</RadixThemesCard>
  <RadixThemesCard asChild={true} css={{"height": "40vh"}}>
  <Link as={NextLink} href={`/dashboard`} sx={{"textDecoration": "none"}}>
  <RadixThemesFlex justify={`between`}>
  <RadixThemesBox>
  <RadixThemesFlex>
  <img css={{"width": "1.6em", "height": "1.6em", "marginTop": "0.7em", "marginRight": "0.3em", "color": "#cb997e"}} src={`grass.svg`}/>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"fontSize": "2em", "fontWeight": "bold", "fontFamily": "Work Sans"}}>
  {`LIFE 101`}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesBox>
  <RadixThemesFlex>
  <img css={{"width": "2em", "height": "2em", "marginTop": "0.5em"}} src={`friends.svg`}/>
  <RadixThemesText as={`p`} css={{"marginTop": "0.7em"}}>
  {`520`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesText as={`p`} css={{"marginLeft": "0.2em", "marginTop": "-0.4em", "fontFamily": "Work Sans"}}>
  {`Introduction to Touching Grass`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"marginLeft": "0.2em", "marginTop": "-0.2em", "fontFamily": "Work Sans"}}>
  {`11 assignments, 1 Exam`}
</RadixThemesText>
  <Divider sx={{"marginTop": "0.5em", "width": "45em", "marginLeft": "-10em"}}/>
  <img css={{"width": "35em", "height": "12em", "marginTop": "-2em"}} src={`wavysage.png`}/>
</Link>
</RadixThemesCard>
</RadixThemesGrid>
</RadixThemesBox>
</Box>
</Box>
</HStack>
  <NextHead>
  <title>
  {`Home`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`/github.svg`} property={`og:image`}/>
  <meta content={`width=device-width, shrink-to-fit=no, initial-scale=1`} name={`viewport`}/>
</NextHead>
</Fragment>
  )
}
