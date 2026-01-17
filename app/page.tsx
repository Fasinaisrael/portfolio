'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Box,
  Button,
  Stack,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import Grid from '@mui/material/GridLegacy';

export default function HomePage() {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', py: 12 }}>
      {/* Background blobs */}
      <Box sx={blob('#a855f7', { top: -200, left: -200 })} />
      <Box sx={blob('#22d3ee', { top: 200, right: -200 })} />
      <Box sx={blob('#ec4899', { bottom: -100, left: '50%' })} />

      <Container maxWidth="lg">
        {/* HERO */}
        <Grid
          container
          spacing={6}
          alignItems="center"
        >
          {/* CONTACT STACK - NEAT VERSION */}
          <Box
            sx={{
              position: 'fixed',        // fixed position so it’s always visible
              top: { xs: 24, md: 32 },  // near top of screen
              right: { xs: 16, md: 32 }, // distance from right edge
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',   // align text to the right
              gap: 1.5,                 // space between items
              zIndex: 999,
            }}
          >
            <Link href="mailto:fasinaisrael.i@gmail.com" style={{ textDecoration: 'none' }}>
              <Typography
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  textAlign: 'right',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                fasinaisrael.i@gmail.com
              </Typography>
            </Link>

            <Link href="https://github.com/Fasinaisrael" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Typography
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  textAlign: 'right',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                github.com/Fasinaisrael
              </Typography>
            </Link>
          </Box>
          {/* TEXT CONTENT */}
          <Grid item xs={12} md={7}>
            <Box sx={{ maxWidth: 900 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  mb: 2,
                  fontSize: { xs: '2.8rem', md: '4rem' },
                }}
              >
                Israel Fasina
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  fontWeight: 500,
                  fontSize: { xs: '1.2rem', md: '1.4rem' },
                }}
              >
                Senior Software Engineer (Mobile & Web)
              </Typography>

              <Typography
                sx={{
                  maxWidth: 700,
                  fontSize: { xs: '1.05rem', md: '1.15rem' },
                  lineHeight: 1.8,
                  color: 'text.secondary',
                  mb: 6,
                }}
              >
                I build secure, scalable software across fintech, edutech,
                foodtech, e-commerce, and internal platforms — with a strong
                focus on system stability, performance, and security-first
                engineering including VAPT practices.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  href="/experience"
                  sx={{ px: 4, py: 1.6 }}
                >
                  View Experience
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  component={Link}
                  href="/project"
                  sx={{ px: 4, py: 1.6 }}
                >
                  View Projects
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component={Link}
                  href="/core-skills"
                  sx={{ px: 4, py: 1.6 }}
                >
                  See How I Build Stable Products
                </Button>
              </Stack>
            </Box>
          </Grid>

          {/* HEADSHOT */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: 'relative',
                width: { xs: 220, md: 300 },
                height: { xs: 220, md: 300 },
                mx: { xs: 'auto', md: 0 }, // center on mobile
                mt: { xs: 4, md: 0 }, // add spacing above on mobile
              }}
            >
              {/* Square background on mobile, circular on desktop */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: { xs: '12%', md: '50%' },
                  bgcolor: 'primary.main',
                  opacity: 0.15,
                }}
              />

              {/* Headshot image */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 12,
                  borderRadius: { xs: '8%', md: '50%' },
                  overflow: 'hidden',
                  bgcolor: 'background.paper',
                }}
              >
                <Image
                  src="/images/headshot.png"
                  alt="Israel Fasina headshot"
                  fill
                  priority
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* HIGHLIGHTS */}
        <Grid container spacing={3} sx={{ mt: { xs: 6, md: 10 } }}>
          <Highlight
            title="Multi-Industry Experience"
            text="Delivered production systems across fintech, edutech, foodtech, and internal platforms with real business impact."
          />

          <Highlight
            title="Mobile & Platform Ownership"
            text="End-to-end ownership of iOS, Android, and Web apps including CI/CD pipelines, releases, monitoring, and store deployments."
          />

          <Highlight
            title="Security-First Engineering"
            text="Practicing VAPT, secure SDLC, token-based authentication, defensive coding, and proactive threat mitigation."
          />

          <Highlight
            title="System Stability & Reliability"
            text="Stabilizing legacy systems, fixing critical production issues, improving performance, and shipping with confidence."
          />
        </Grid>
        {/* CORE SKILLS */}
        {/* CORE SKILLS */}
        <Box sx={{ mt: { xs: 12, md: 16 } }}> {/* Increased margin-top */}
          <Typography variant="h4" fontWeight={700} sx={{ mb: 4 }}>
            Core Skills
          </Typography>

          <Stack
            direction="row"
            flexWrap="wrap"
            gap={1.5} // spacing between chips (both row & column)
          >
            {[
              'React', 'React Native', 'Expo', 'Tailwind CSS', 'MUI',
              'Node.js', 'Express', 'REST API', 'GraphQL',
              'Secure Storage', 'VAPT', 'CI/CD', 'Authentication', 'Typescript',
              'Git', 'Figma', 'Agile', 'Redux', 'Zustand', 'Xcode', 'Android Studio'
            ].map((skill) => (
              <Chip
                key={skill}
                label={skill}
                color="primary"
                variant="outlined"
                sx={{ mb: 1 }} // extra vertical spacing for wrapping rows
              />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

/* ---------- Highlight Card ---------- */

function Highlight({ title, text }: { title: string; text: string }) {
  return (
    <Grid item xs={12} md={4}>
      <Card
        sx={{
          height: '100%',
          bgcolor: 'background.paper',
          transition: '0.25s',
          '&:hover': { transform: 'translateY(-6px)' },
        }}
      >
        <CardContent>
          <Typography variant="h6" fontWeight={700}>
            {title}
          </Typography>
          <Typography sx={{ mt: 2, color: 'grey.400' }}>
            {text}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

/* ---------- Blob ---------- */

const blob = (color: string, pos: any) => ({
  position: 'absolute',
  width: 500,
  height: 500,
  bgcolor: color,
  opacity: 0.25,
  filter: 'blur(140px)',
  borderRadius: '50%',
  ...pos,
});