import { Box, Typography } from '@mui/material'
import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout>
        <Box sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}>
          <Typography variant="h4">
            Welcome To My Resturant
          </Typography>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Libero labore asperiores laborum quasi, quae nesciunt praesentium 
            minima nobis iusto adipisci, illo aliquam optio obcaecati quam, 
            aspernatur dolorum fugit corrupti distinctio qui! Hic, quibusdam sint! 
            Similique nulla vero sunt repellendus voluptatum officia eaque eius
            architecto, temporibus, laborum tempora voluptatibus. Voluptatem consequatur
            repellat perferendis corporis ad animi corrupti iusto, labore voluptatum similique laudantium distinctio culpa velit
            totam aspernatur ut, sunt consectetur. Perspiciatis accusantium autem minima voluptate laboriosam quia pariatur,
            quaerat aperiam, repellendus iure nemo debitis ipsa delectus doloremque fugiat? Amet reprehenderit 
            expedita quod natus adipisci ab a rerum, eius possimus, molestias nisi!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae est tenetur voluptatum itaque quam natus corporis iure, laborum inventore nulla expedita neque? Aperiam, vero quae nemo aliquam mollitia ducimus laborum saepe nobis fugit, temporibus consectetur dolorum iure suscipit quisquam recusandae cum obcaecati culpa dignissimos reprehenderit asperiores, rem incidunt et. Exercitationem impedit quia ducimus, totam minus nulla molestias blanditiis nemo dicta at odio distinctio libero, aliquam eaque omnis, reprehenderit cupiditate. Animi amet autem porro blanditiis dolores pariatur, excepturi esse assumenda non expedita exercitationem sequi, nisi nesciunt. Reprehenderit magni veniam voluptas, blanditiis labore cum asperiores, aperiam commodi dolores voluptate nobis dolorem facilis?
          </p>
        </Box>
    </Layout>
  )
}

export default About