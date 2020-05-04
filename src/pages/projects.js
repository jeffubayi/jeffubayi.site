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
				<h3><Link to="https://naiblog.xyz"> NaiBlog</Link>{''}
					<QueryImage name="naiblog" width={300} />
				
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
				<h3>{' '}
					Event Scheduler
					<QueryImage name="python" width={200} />
				
				</h3>
				<p>
				     An event scheduler application, sort of like 
					 a mini version of Eventbrite or meetup.com. Allows users 
					 to create outdoor events and other users to register as attendees.
				    Built using Python, Django and Django Rest-Framework. 
					Here is a <Link to="https://www.jeffubayi.site/blog/Python-event-api">tutorial</Link> on how I set up the JSON API 
					and tested the endpoints on postman.
				</p>
				<Small>
					<Link
						to="https://www.jeffubayi.site/blog/Python-event-api"
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
			        <Link to=""> Macrina</Link>{''}
					<QueryImage name="logo2" width={300} />{' '}
					
				</h3>

				<p>
					My girl sells designer women clothes,
					shoes, sweaters, etc—and shares her stock with her online instagram followers.
				</p>
				<p>
					So I decided to create an online store that can enable the order and purchase of cloths from anywhere.
					Built with Gatsby,the application uses stripe for payments and has a full functional eccomerce feature.
					Its a JAMstack Ecommerce store and I used AWS(amplify) to deploy it. Authentication was through AWS cognito and lambda functions.
					
					Here is a <Link to="https://www.jeffubayi.site/blog/gatsby">tutorial</Link> on how I deployed it serverless.
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
				<h3>Pay App</h3>
			
				<p>
					Project implementing Safaricom Lipa na Mpesa.
                    Built with Python, the application connects to <Link to="https://developer.safaricom.co.ke/docs">Daraja API</Link> to enable transaction from a registered number.
                    
				</p>
				<small>
				    <Link
				  		to="https://github.com/jeffubayi/payApp"
						secondary
						button
					>
						<Icon name="GitHub" /> Code
					</Link>
				</small>
			
			</WaveSection>

			<section>
				<h3>

				    <Link to=""> Budget App</Link>{''}
					    <QueryImage name="budgety" width={300} />{' '}
				</h3>
				<p>
					Expense tracking application that keeps you up per with your income spending.
					Enables you to view your budget from a set value (Ksh.) and item list of expenses.
					I initially built the application with Vanilla JS as a goal to learn some basic concepts.
					The final web app is  [here](https://github.com/jeffubayi/Budgety) based of react hooks to make it more modern.
				
				</p>
				<Small>
			     	<Link to="https://budget-yako.netlify.app/" secondary button>
						Demo
					</Link>
					&nbsp;
					<Link
						to="https://github.com/jeffubayi/Budget-App"
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
