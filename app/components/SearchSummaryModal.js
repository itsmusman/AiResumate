import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import Modal from "react-native-modal";
import colors from "../config/colors";

export default function SearchSummaryModal(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobs, setJobs] = useState([]);
  const [filteredSummary, setFilteredSummary] = useState([]);

  useEffect(() => {
    const jobsData = [
      "Results-driven professional with a proven track record of exceeding sales targets. Passionate about building relationships and delivering exceptional customer service. Committed to continuous learning and personal growth to drive success in a fast-paced sales environment.",
      "Dynamic marketing specialist with a creative mindset and a passion for brand storytelling. Experienced in developing and executing integrated marketing campaigns across multiple channels. Dedicated to driving brand awareness and engaging target audiences through compelling content and strategic initiatives.",
      "Accomplished project manager with a strong background in leading cross-functional teams and delivering successful outcomes. Proactive and detail-oriented, adept at managing complex projects from inception to completion. Committed to driving efficiency, quality, and innovation in all project endeavors.",
      "Dedicated human resources professional with expertise in talent acquisition and employee development. Proven ability to attract top talent and foster a positive work culture. Passionate about empowering individuals to reach their full potential and contributing to organizational success.",
      "Innovative software engineer with a passion for developing cutting-edge applications. Skilled in multiple programming languages and frameworks, with a strong focus on user experience and performance optimization. Committed to staying up-to-date with emerging technologies to drive continuous improvement and deliver exceptional software solutions.",
      "Seasoned financial analyst with a solid background in financial planning and analysis. Detail-oriented and analytical thinker, skilled in conducting comprehensive financial assessments and providing strategic recommendations. Dedicated to driving profitability and optimizing financial performance.",
      "Customer-focused retail manager with a demonstrated history of delivering outstanding customer service. Skilled in team leadership, sales management, and inventory control. Committed to creating a positive shopping experience and driving customer loyalty.",
      "Accomplished educator with a passion for fostering student growth and development. Experienced in creating engaging and inclusive learning environments. Dedicated to providing quality instruction and empowering students to reach their full potential.",
      "Strategic business development professional with a proven ability to identify new opportunities and drive revenue growth. Skilled in building and nurturing relationships with key stakeholders. Committed to delivering innovative solutions that align with business objectives.",
      "Seasoned healthcare professional with expertise in patient care and clinical operations. Skilled in providing compassionate and comprehensive healthcare services. Committed to improving patient outcomes and delivering exceptional care experiences.",
      "Detail-oriented administrative assistant with strong organizational and communication skills. Proactive and resourceful, adept at managing multiple tasks and priorities. Committed to providing efficient support to enhance productivity and streamline operations.",
      "Experienced graphic designer with a passion for creating visually impactful designs. Skilled in utilizing industry-standard software and tools to deliver creative solutions. Dedicated to staying ahead of design trends and pushing the boundaries of visual communication.",
      "Dynamic sales manager with a proven ability to lead high-performing teams and drive revenue growth. Skilled in developing sales strategies and building strong customer relationships. Committed to achieving sales targets and exceeding customer expectations.",
      "Accomplished data analyst with a strong background in analyzing complex datasets and providing actionable insights. Detail-oriented and proficient in data visualization and statistical analysis. Committed to leveraging data to drive informed business decisions and optimize performance.",
      "Results-oriented digital marketer with expertise in creating and executing successful digital campaigns. Skilled in utilizing various digital channels to reach target audiences and drive engagement. Committed to staying ahead of digital trends and delivering measurable results.",
      "Dedicated customer service representative with a passion for delivering exceptional customer experiences. Experienced in handling customer inquiries and resolving issues effectively. Committed to building positive relationships and ensuring customer satisfaction.",
      "Dynamic operations manager with a proven track record of optimizing operational efficiency and driving process improvements. Skilled in leading cross-functional teams and implementing strategic initiatives. Committed to delivering high-quality outcomes and exceeding organizational goals.",
      "Accomplished event planner with expertise in coordinating and executing memorable events. Skilled in managing all aspects of event logistics, including venue selection, vendor coordination, and budget management. Committed to delivering exceptional experiences that exceed client expectations and leave a lasting impression.",
      "Resourceful marketing coordinator with a creative mindset and a passion for brand promotion. Experienced in developing and implementing integrated marketing campaigns across digital and traditional channels. Committed to driving brand awareness, generating leads, and achieving marketing objectives.",
      "Seasoned IT professional with a strong background in system administration and network management. Skilled in troubleshooting complex technical issues and implementing effective solutions. Committed to delivering reliable IT infrastructure and ensuring optimal system performance.",
      "Dynamic project coordinator with a proven ability to streamline processes and drive project success. Experienced in coordinating project timelines, resources, and deliverables. Dedicated to ensuring project efficiency, quality, and on-time completion.",
      "Results-driven sales executive with a successful track record in driving revenue growth and building key client relationships. Skilled in consultative selling, negotiation, and account management. Committed to exceeding sales targets and providing exceptional customer service.",
      "Accomplished copywriter with a flair for crafting compelling and engaging content. Experienced in developing creative copy for various mediums, including print, digital, and social media. Dedicated to delivering impactful messaging that resonates with target audiences.",
      "Innovative product manager with a passion for developing and launching successful products. Skilled in market research, product strategy, and project management. Committed to delivering products that meet customer needs and drive business growth.",
      "Seasoned operations director with expertise in optimizing operational processes and driving organizational efficiency. Skilled in team leadership, resource allocation, and performance management. Committed to implementing best practices and driving continuous improvement.",
      "Customer-centric sales representative with a strong track record of exceeding sales targets. Skilled in building relationships, conducting effective sales presentations, and negotiating contracts. Committed to providing exceptional customer service and fostering long-term partnerships.",
      "Accomplished social media manager with a deep understanding of digital platforms and social media trends. Experienced in developing and executing social media strategies to drive engagement and brand awareness. Dedicated to creating impactful online experiences and fostering community engagement.",
      "Detail-oriented quality assurance analyst with a strong background in software testing and quality control. Skilled in developing test plans, conducting test cases, and documenting defects. Committed to ensuring the delivery of high-quality software products.",
      "Strategic human resources manager with expertise in talent acquisition, employee development, and HR policies. Skilled in building high-performing teams and fostering a positive work culture. Dedicated to supporting organizational growth and maximizing employee potential.",
      "Accomplished financial advisor with a proven track record in providing comprehensive financial planning services. Skilled in investment management, retirement planning, and wealth preservation. Committed to helping clients achieve their financial goals and secure their financial future.",
      "Dynamic customer success manager with a passion for delivering exceptional client experiences. Experienced in building and maintaining strong customer relationships, driving adoption, and ensuring customer satisfaction. Committed to driving customer success and maximizing client retention.",
      "Seasoned healthcare administrator with expertise in healthcare operations and strategic planning. Skilled in managing budgets, overseeing facility operations, and ensuring regulatory compliance. Dedicated to delivering quality healthcare services and improving patient outcomes.",
      "Innovative UX/UI designer with a passion for creating intuitive and visually appealing user experiences. Experienced in user research, wireframing, and prototyping. Committed to delivering designs that enhance user satisfaction and drive engagement.",
      "Dedicated supply chain manager with a strong background in logistics and inventory management. Skilled in optimizing supply chain processes, reducing costs, and ensuring timely delivery. Committed to driving operational efficiency and maximizing customer satisfaction.",
      "Accomplished legal counsel with expertise in contract negotiation, compliance, and risk management. Skilled in providing strategic legal advice, drafting and reviewing contracts, and resolving legal disputes. Dedicated to protecting the interests of the organization and ensuring legal compliance.",
      "Resourceful content strategist with a keen eye for storytelling and a passion for creating engaging content. Experienced in developing content strategies, managing editorial calendars, and optimizing content for SEO. Committed to driving brand awareness and engaging target audiences through compelling content.",
      "Seasoned business analyst with a strong background in data analysis and strategic planning. Skilled in identifying business opportunities, conducting market research, and developing actionable insights. Dedicated to driving business growth and improving operational efficiency.",
      "Dynamic customer service manager with a proven ability to lead high-performing teams and deliver exceptional service experiences. Skilled in implementing customer service strategies, resolving customer escalations, and driving customer satisfaction. Committed to fostering a customer-centric culture and exceeding service expectations.",
      "Accomplished software developer with expertise in full-stack web development. Skilled in multiple programming languages and frameworks, with a focus on creating scalable and efficient software solutions. Committed to continuous learning and staying abreast of emerging technologies.",
      "Results-driven sales operations manager with a strong background in sales analytics and process improvement. Experienced in driving sales effectiveness, implementing sales tools and systems, and optimizing sales workflows. Dedicated to maximizing sales performance and enhancing sales team productivity.",
      "Innovative digital strategist with a passion for leveraging digital channels to drive business growth. Skilled in developing and executing digital marketing strategies, managing online campaigns, and analyzing data to optimize performance. Committed to delivering measurable results and staying ahead of digital trends.",
      "Seasoned executive assistant with exceptional organizational and administrative skills. Proactive and resourceful, adept at managing executive calendars, coordinating travel arrangements, and handling confidential information. Committed to providing high-level support to enhance executive productivity and efficiency.",
      "Dedicated project engineer with expertise in overseeing engineering projects from concept to completion. Skilled in project planning, resource allocation, and technical coordination. Committed to delivering projects on time, within budget, and to the highest quality standards.",
      "Accomplished healthcare consultant with a strong background in healthcare management and process improvement. Experienced in analyzing healthcare systems, identifying opportunities for improvement, and implementing strategic initiatives. Dedicated to driving efficiency and enhancing patient care.",
      "Dynamic sales trainer with a passion for developing sales teams and driving sales performance. Skilled in designing and delivering sales training programs, coaching sales representatives, and implementing sales methodologies. Committed to equipping sales teams with the skills and knowledge to succeed.",
      "Seasoned public relations specialist with expertise in media relations and brand management. Skilled in developing strategic PR campaigns, crafting compelling messaging, and building relationships with media outlets. Dedicated to enhancing brand reputation and driving positive public perception.",
      "Innovative product designer with a creative mindset and a passion for user-centered design. Experienced in conducting user research, prototyping, and iterative design processes. Committed to creating intuitive and visually appealing products that meet user needs.",
      "Detail-oriented financial controller with a strong background in financial reporting and analysis. Skilled in budgeting, forecasting, and financial modeling. Committed to ensuring financial transparency, accuracy, and compliance.",
      "Strategic marketing manager with a proven track record in developing and executing marketing strategies. Experienced in market research, brand management, and campaign execution. Dedicated to driving brand growth and achieving marketing objectives.",
      "Accomplished executive director with expertise in leading nonprofit organizations and driving mission-driven initiatives. Skilled in strategic planning, fundraising, and board governance. Committed to making a positive impact on the community and driving organizational success.",
      "Results-oriented professional with a strong work ethic and a passion for achieving excellence. Committed to continuous learning and personal growth to excel in any role or industry.",
      "Dynamic and adaptable team player with excellent communication skills. Motivated by challenges and driven to deliver exceptional results in any professional setting.",
      "Dedicated problem solver with a positive attitude and a proven ability to handle complex tasks with precision. Committed to finding innovative solutions and exceeding expectations.",
      "Detail-oriented individual with a strong sense of responsibility and a drive for perfection. Motivated by the desire to contribute positively to any organization or project.",
      "Resourceful and creative thinker with a passion for tackling new challenges. Inspired by the opportunity to learn and grow in diverse environments.",
      "Proactive and self-motivated professional with a track record of taking initiative and driving projects to successful completion. Enthusiastic about contributing to a company's growth and success.",
      "Results-driven achiever with a strong sense of motivation and a commitment to exceeding goals. Inspired by the opportunity to make a meaningful impact and contribute to a company's success.",
      "Self-disciplined and highly motivated individual with a passion for continuous improvement. Driven by the desire to reach new heights of personal and professional success.",
      "Energetic and enthusiastic team player with a can-do attitude. Motivated by the opportunity to collaborate with others and achieve shared goals.",
      "Ambitious and determined professional with a strong desire to make a difference. Inspired by the chance to leave a lasting impact and create positive change.",
      "Passionate and driven individual with a relentless pursuit of excellence. Motivated by the opportunity to push boundaries and achieve new levels of success.",
      "Enthusiastic and dedicated team member with a strong work ethic. Inspired by the chance to contribute to a positive and productive work environment.",
      "Highly organized and detail-oriented individual with a passion for efficiency and effectiveness. Motivated by the opportunity to streamline processes and improve productivity.",
      "Adaptable and versatile professional with a strong ability to learn quickly and take on new challenges. Driven by the desire to expand skills and knowledge in diverse areas.",
      "Self-motivated and goal-oriented individual with a passion for success. Inspired by the opportunity to set and achieve ambitious targets.",
      "Creative and innovative thinker with a knack for problem-solving. Motivated by the opportunity to find unique and effective solutions to complex issues.",
      "Proactive and results-focused team player with excellent interpersonal skills. Inspired by the chance to collaborate with others and achieve common goals.",
      "Highly motivated and dedicated individual with a strong sense of purpose. Driven by the desire to make a positive impact on the world.",
      "Goal-driven and ambitious professional with a passion for continuous learning and growth. Motivated by the opportunity to expand knowledge and expertise.",
      "Detail-oriented and meticulous individual with a strong commitment to accuracy and quality. Inspired by the opportunity to deliver exceptional work that exceeds expectations.",
      "Self-starter with a proactive mindset and a drive for success. Motivated by the opportunity to take ownership of projects and deliver outstanding results.",
      "Passionate and enthusiastic team member with a strong sense of commitment. Inspired by the chance to contribute to a collaborative and supportive work environment.",
      "Results-oriented and dedicated individual with a relentless pursuit of excellence. Driven by the desire to achieve goals and exceed expectations.",
      "Adaptable and resilient professional with a positive attitude. Motivated by the opportunity to overcome challenges and thrive in any situation.",
      "Innovative and forward-thinking thinker with a passion for creativity. Inspired by the chance to bring fresh ideas and perspectives to any project or task.",
      "Motivated and proactive individual with exceptional problem-solving skills. Driven by the opportunity to tackle complex issues and find effective solutions.",
      "Self-motivated and ambitious professional with a strong desire to achieve greatness. Inspired by the chance to push boundaries and reach new levels of success.",
      "Dedicated and results-driven team player with excellent collaboration skills. Motivated by the opportunity to work alongside talented individuals and achieve collective success.",
      "Detail-oriented and analytical thinker with a passion for data-driven decision-making. Inspired by the chance to leverage insights and drive strategic outcomes.",
      "Self-driven and resilient individual with a growth mindset. Motivated by the opportunity to overcome obstacles and continuously improve.",
      "Goal-oriented and determined professional with a relentless pursuit of personal and professional development. Driven by the desire to continuously learn and grow.",
      "Enthusiastic and proactive team member with a strong sense of initiative. Inspired by the opportunity to contribute ideas and drive positive change.",
      "Results-focused and customer-centric individual with a passion for delivering exceptional experiences. Motivated by the chance to exceed customer expectations and build long-lasting relationships.",
      "Energetic and proactive problem solver with strong communication skills. Inspired by the opportunity to collaborate with diverse teams and drive successful outcomes.",
      "Adaptable and versatile professional with a strong ability to thrive in fast-paced environments. Driven by the challenge of embracing change and achieving success.",
      "Proactive and self-disciplined individual with a commitment to continuous improvement. Motivated by the opportunity to optimize processes and drive efficiency.",
      "Detail-oriented and organized team player with excellent multitasking abilities. Inspired by the chance to contribute to the seamless execution of projects and initiatives.",
      "Self-motivated and proactive individual with a strong sense of ownership. Driven by the desire to take responsibility and deliver outstanding results.",
      "Passionate and dedicated professional with a strong work ethic. Motivated by the opportunity to make a meaningful impact and contribute to a larger purpose.",
      "Results-driven and adaptable team member with excellent problem-solving skills. Inspired by the challenge of finding innovative solutions to complex issues.",
      "Ambitious and driven individual with a strong desire for professional growth. Motivated by the opportunity to advance skills and take on new responsibilities.",
      "Creative and visionary thinker with a passion for innovation. Inspired by the chance to think outside the box and drive positive change.",
      "Highly motivated and proactive team player with exceptional leadership skills. Driven by the opportunity to inspire and empower others towards success.",
      "Detail-oriented and meticulous individual with a strong focus on quality. Motivated by the opportunity to deliver exceptional work that exceeds expectations.",
      "Self-driven and goal-oriented professional with a strong sense of determination. Inspired by the chance to set ambitious goals and achieve them.",
      "Passionate and enthusiastic team member with a positive attitude. Motivated by the opportunity to contribute to a collaborative and supportive work environment.",
      "Results-focused and dedicated individual with a strong sense of purpose. Driven by the desire to make a meaningful impact and create positive change.",
      "Adaptable and resilient professional with a growth mindset. Inspired by the opportunity to embrace challenges and learn from them.",
      "Motivated and proactive problem solver with excellent decision-making abilities. Driven by the opportunity to find effective solutions and drive successful outcomes.",
      "Self-motivated and ambitious individual with a strong desire to excel. Motivated by the opportunity to achieve personal and professional success through hard work and dedication.",
    ];
    setJobs(jobsData);
    setFilteredSummary(jobsData);
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = jobs.filter((job) =>
      job.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSummary(filtered);
  };

  const handleSelectSummary = (job) => {
    props.onSelectSummary(job);
    setSearchTerm("");
    setFilteredSummary(jobs);
    props.onClose();
  };

  return (
    <Modal
      swipeDirection={["down"]}
      style={{ justifyContent: "flex-end", margin: 0 }}
      onSwipeComplete={props.onClose}
      swipeThreshold={200}
      propagateSwipe={true}
      onBackdropPress={props.onClose}
      isVisible={props.visible}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Search Summary</Text>
        <TextInput
          style={styles.searchInput}
          onChangeText={(text) => {
            setSearchTerm(text);
            handleSearch(text);
          }}
          value={searchTerm}
          placeholder="Search Summary"
          placeholderTextColor={colors.appColor}
        />

        {filteredSummary.length > 0 ? (
          <FlatList
            keyboardShouldPersistTaps="handled" // Allow direct click input when keyboard is open
            style={{ flex: 1 }}
            nestedScrollEnabled={true}
            data={filteredSummary}
            keyExtractor={(job) => job}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.jobItem}
                onPress={() => handleSelectSummary(item)}
              >
                <Text style={styles.jobTitle}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        ) : (
          <Text>No Data Found</Text>
        )}

        <TouchableOpacity style={styles.cancelButton} onPress={props.onClose}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    maxHeight: "65%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: colors.appColor,
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
    width: "100%",
  },
  jobItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.appColor,
  },
  jobTitle: {
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: colors.appColor,
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
    width: "45%",
    alignSelf: "center",
  },
  cancelButtonText: {
    color: "#fff",
    textAlign: "center",
  },
});
