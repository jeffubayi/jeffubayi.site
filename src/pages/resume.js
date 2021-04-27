import React from 'react'

import { Icon, Layout, Link, Resume, SEO, WaveSection } from 'src/components'
import { github } from 'src/links'

const ResumePage = () => (
	<Layout activePage="resume">
		<SEO title="Jeff Ubayi Resume" />
		<Resume>
			<WaveSection disableTopMargin>
				<p>
					I'm a Frontend Developer currently working at 
					<b>
						Twende Mobility.
					</b>
	                                My inbox is always open, whether for freelance opportunities or just a potential project.
	                                I'll reply ASAP.
	     
	                                For more details, download my resume as a PDF, or
					check out some of my code on GitHub!
				</p>
				<p>
					<Link to="/JEFFUBAYIRESUME.pdf" external button>
						Download Resume
					</Link>
					&nbsp;
					<Link to={github} secondary button>
						<Icon name="GitHub" /> Visit GitHub
					</Link>
				</p>
			</WaveSection>
			<Resume.Position
				name="Twende Carpool"
				link="https://www.twende.app/"
				start="June 2020"
			>
				<Resume.Role
					name="Front-End Developer"
					start="full-time"
					end=""
				/>
	
				<Resume.Description>
					<p>
					Developing React web apps with styled components , Material UI and Firebase cloud functions s.
                Experienced in CI/CD  platform and got accustomed to frontend development  and design tools such as Figma and Zeplin.                                        
             

					</p>
				</Resume.Description>
			</Resume.Position>
			<Resume.Position
				name="EAC Directory"
				link="https://eacdirectory.net/domains"
				start="November 2019"
				end="May 2020"
			>
				<Resume.Role 
                                    name="Junior Web Developer" 
	                            start="Freelance"
			            end=""
                                />
				<Resume.Description>
					<p>
						Software developer contributing to a visual website
						design for a website builder platform with over a thousand
						customers. Worked on various high-impact features across
						multiple teams, including content editor, multi-user,
						comments, activity log,domain name configuration
						& web hosting.
					</p>
				</Resume.Description>
			</Resume.Position>
			<Resume.Position name="NaiBlog" link="https://naiblog.xyz">
	                <Resume.Role name="Editor & Developer" />
				<Resume.Description>
					<p>
						Founder of ​NaiBlog​, a blogsite with articles that 
	                                        speaks of societal issues,entertainment and youth empowerment.
					</p>
				</Resume.Description>
			</Resume.Position>
			
		</Resume>
	</Layout>
)

export default ResumePage
