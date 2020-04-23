import React from 'react'

import { Icon, Layout, Link, Resume, SEO, WaveSection } from 'src/components'
import { github } from 'src/links'

const ResumePage = () => (
	<Layout activePage="resume">
		<SEO title="Jeff Ubayi Resume" />
		<Resume>
			<WaveSection disableTopMargin>
				<p>
					I'm currently looking for a full-time developer role with the right company.
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
				name="EAC Directory"
				link="https://eacdirectory.net/domains"
				start="November 2019"
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
						Maintainer​ of ​NaiBlog​, a blogsite with articles that 
	                                        speaks of societal issues,entertainment and youth empowerment.
					</p>
				</Resume.Description>
			</Resume.Position>
			<Resume.Position
				name="Kenya Ports Authority"
				link="https://www.kpa.co.ke"
				start="January 2018"
				end="May 2018"
			>
				<Resume.Role
					name="System Admin/Tech support"
					start="Intern"
					end=""
				/>
	
				<Resume.Description>
					<p>
	                                    Worked on maintaining SAP server for Kenya Ports database optimization system.  
				            learnt alot about using Linux OS and network configuration protocols. Also Gained  
	                                    skills on time management, troubleshooting and working under pressure.
					</p>
				</Resume.Description>
			</Resume.Position>
		</Resume>
	</Layout>
)

export default ResumePage
