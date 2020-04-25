import React from 'react'
import styled from 'styled-components'

import {
	Icon,
	Layout,
	Link,
	QueryImage,
	SEO,
	Small,
	WaveSection,
} from 'src/components'

const Projects = styled.div`
	section {
		padding: calc(2rem + 1vw) 0;

		> :first-child {
			margin-top: 0;
		}
	}
`

const ProjectsPage = () => (
	<Layout activePage="projects">
		<SEO title="Projects" />
		<WaveSection>
			<p>
				Here's a brief introduction to some of the projects I've built
				or made contributions to!  I'm comfortable with working on JavaScript, 
	                        Python web frameworks and always exploring other technologies that may be handy. 
			</p>
		</WaveSection>

		<Projects>
			<section>
				<h3><Link to="https://naiblog.xyz"> NaiBlog.xyz</Link>{''}
					<QueryImage name="naiblog" width={400} />
				
				</h3>
				<p>
					A blog site with relative social articles. Inspired by the Netflix app features,
	                                the site comes with a search and recomendation design.
                                        As a person who likes reading, this site is a haven for writing articles that I related to.
	                                Developed with Jekyll static site generator and Ruby gems. 
				</p>
				
				<Small>
					&nbsp;
					<Link to="https://naiblog.xyz/" secondary button>
						Demo
					</Link>
					&nbsp;
					<Link
						to="https://github.com/ubeezy/naiblog"
						secondary
						button
					>
						<Icon name="GitHub" /> Code
					</Link>
				</Small>
			</section>

			<WaveSection as="section">
				<h3>
				<QueryImage
						name="python"
						style={{
							display: 'inline-block',
							margin: 'auto',
							verticalAlign: 'middle',
							width: 250,
							height: 110,
						}}
					/>{' '}
					Event Scheduler
				</h3>
				<p>
				     An event scheduler application, sort of like 
					 a mini version of Eventbrite or meetup.com.
				</p>
				<p>
				    Built using Python, Django and Django Rest-Framework. 
					Here is a <Link to="https://www.jeffubayi.site/blog/gatsby">tutorial</Link> on how I set up the JSON API 
					and tested the endpoints on postman.
				</p>
				<p>
				   Allows users to create outdoor events and other users to register as attendees.
				   I explored how to review an event, putting in place checks to ensure only those members who attended the event can review any given event. 
				
				</p>
				<Small>
					<Link
						to="https://www.jeffubayi.site/blog/gatsby"
						secondary
						button
					>
						Blog
					</Link>
					&nbsp;
					<Link
						to="https://github.com/jeffubayi/Events-Organizer"
						secondary
						button
					>
						<Icon name="GitHub" /> Code
					</Link>
				</Small>
			</WaveSection>

			<section>
			<h3>
					<QueryImage name="logo2" width={400} />{' '}
					Macrina
				</h3>

				<p>
					My girl sells designer women clothes,
					shoes, sweaters, etc—and shares her stock with her online instagram followers.
				</p>
				<p>
					The Sims 4 creator community is mostly active on Tumblr, so
					she primarily posts her content there. She wasn't happy with
					any of the existing Tumblr themes, so she asked me to create
					one for her.
				</p>
				<p>
					At first, I tried to avoid the awkward Tumblr theme template
					system by building a React app which consumed Tumblr's API.
					Unfortunately her blog is too popular, and her followers
					were regularly unable to access it due to rate limiting on
					the API!
				</p>
				<p>
					As a result, I started again and re-created the same design
					as a plain Tumblr theme. Some extra non-Tumblr functionality
					was rebuilt into vanilla JavaScript, fetching data directly
					from Contentful's API.
				</p>
				<Small>
					<Link to="https://saurussims.tumblr.com/" secondary button>
						Website
					</Link>
					&nbsp;
					<Link
						to="https://github.com/thisRaptori/saurussims"
						secondary
						button
					>
						<Icon name="GitHub" /> Code
					</Link>
				</Small>
			</section>

			<WaveSection as="section">
				<h3>Midnight Sun</h3>
				<p>
					My wife and I worked together in our spare time over the
					course of a couple of years to build an online game, and
					managed the community which grew around it.
				</p>
				<p>
					The game was a text-and-graphics based RPG where users were
					given superpowers, and included a host of different features
					to keep them engaged. The core was a real-time multiplayer
					battle system, complete with non-player characters governed
					by a complex algorithm determining how they would interact
					with real users.
				</p>
				<p>
					Users were able to choose from 32 superpowers, ranging from
					simple (such as telekinesis, pyrokinesis, or superhuman
					strenth), through to complex (mind control, power
					absorption, time manipuation, and so on). These were all
					painstakingly balanced and fully realised, with a huge
					variety of capabilities and effects.
				</p>
				<p>
					The backend was written in PHP; the frontend was written as
					vanilla CSS/HTML with a custom DOM manipulation system built
					using jQuery to handle interactivity.
				</p>
			</WaveSection>

			<section>
				<h3>WPC Extended</h3>
				<p>
					A WordPress plugin which provides a simplified interface for
					adding to and updating the Customizer, bundled with several
					custom controls and shorthands to make life easier.
				</p>
				<p>
					As it's a WordPress plugin, this uses a mix of PHP, CSS, and
					jQuery to implement extra functionality on top of the
					WordPress platform. It makes theme customisation and
					development significantly faster by providing a simpler and
					more intuitive interface for adding advanced customisation
					options to the system.
				</p>
				<p>
					The plugin itself was designed to be extensible. For
					example, the{' '}
					<Link to="https://github.com/thisRaptori/wpc-extended-sass">
						Automated SASS Export
					</Link>{' '}
					plugin injects the customisation options into a SASS
					compiler and compiles the user's CSS on update, providing a
					much faster and more responsive developer experience.
				</p>
				<Small>
					<Link
						to="https://github.com/thisRaptori/wpc-extended"
						secondary
						button
					>
						<Icon name="GitHub" /> Code
					</Link>
				</Small>
			</section>
		</Projects>
	</Layout>
)

export default ProjectsPage
