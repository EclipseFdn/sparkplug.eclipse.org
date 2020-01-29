---
title: "Frequently Asked Questions"
date: 2020-01-07T16:09:45-04:00
---
Last Updated: January 29, 2020


#### Q. What is Sparkplug?
A. An open source software specification that provides MQTT clients the framework to seamlessly integrate data from their applications, sensors, devices, and gateways within the MQTT Infrastructure.
having different Topic Namespace and payload encoding inhibits interoperability for the end customer. 

---

#### Q. Does the Sparkplug specification change the MQTT specification?
A. No. Sparkplug is simply a specification that defines how to best use MQTT in real-time, mission critical industrial infrastructures. Sparkplug addresses the following components within an MQTT infrastructure:
#1 - Sparkplug defines an OT centric Topic Namespace 
#2 - Sparkplug defines an OT centric Payload definition optimized for industrial process variables.
#3 - Sparkplug defines MQTT Session State management required by real-time OT SCADA systems.
having different Topic Namespace and payload encoding inhibits interoperability for the end customer. 

---

#### Q. Why is now the right time for the Eclipse Foundation to create the Sparkplug Working Group?
A. MQTT has emerged as a dominant messaging transport across both the IT and OT market sectors. By design, the MQTT specification does not dictate a Topic Namespace nor does it dictate any payload encoding. But as IIoT is adopted by device OEM’s in the industrial sector, having different Topic Namespace and payload encoding inhibits interoperability for the end customer. 

---

#### Q. What is a good way to think about what Sparkplug accomplishes?
A. The Internet of People exploded because of two open technologies: First there was HTTP which defined a data exchange protocol. Then there was HTML that was used to “define” the data sent by HTTP. Together, HTTP and HTML, these technologies provided the basis for the explosion of the Internet of People. 

For the IIoT to obtain the same adoption and growth rate the same approach needs to be taken. The widely adopted MQTT message transport can be thought of like HTTP i.e. providing an open and interoperable messaging framework. But the IIoT is missing the “definition” of the data in the payload. Therefore Sparkplug can be thought of like the HTML of IIoT.
having different Topic Namespace and payload encoding inhibits interoperability for the end customer. 

---

#### Q. What are some of the key projects the Sparkplug Group will encompass?
A. Initially, the working group will host the Sparkplug specification project and Eclipse Tahu, an existing implementation of the standard. The current Sparkplug (version B) specification was contributed to the Eclipse Foundation by Cirrus Link Solutions. But since the development of the Sparkplug B specification, there have been many suggestions by both end customers and vendors for additional capabilities and features. 
having different Topic Namespace and payload encoding inhibits interoperability for the end customer. 

---

#### Q. How can interested developers and organizations get involved?
A. If you want to get in on the ground floor, start by reviewing the [working group charter](https://www.eclipse.org/org/workinggroups/eclipse_sparkplug_charter.php) and the [Sparkplug Working Group Participation Agreement (WPGA)](https://www.eclipse.org/org/workinggroups/wpga/sparkplug_working_group_participation_agreement.pdf), or email us at membership@eclipse.org. Individually, developers can join the [Sparkplug WG mailing list](https://accounts.eclipse.org/mailing-list/sparkplug-wg) where we’ll be sharing the progress of the working group.