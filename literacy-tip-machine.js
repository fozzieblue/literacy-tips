onload = function randomQuote() {
  var rand = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerHTML = rand;
  
  var index = quotes.indexOf(rand);
  tipNumber.innerHTML = index+1;
};

var quote = document.getElementById("quote-js");
var tipNumber = document.getElementById("tipNumber");

//Random quote machine
var quotes = [
  'Ask your child questions about the story you are reading to ensure comprehension.',
  'Book family time to read with your children every day.',
  'Encourage children to read words on TV, street signs, mugs and T-shirts.',
  'Give your time to read aloud to a child.',
  'Have a child read a book to you.',
  'Treat a child to a story a day.',
  'Zap off the TV - pick up a book instead!',
  'Use reading time to create a special bond with a child.',
  'Read picture books and nursery rhymes to your baby/child several times day, a few minutes at a time.  Your little one will soon look forward to enjoying this time together.',
  'Although it may seem awkward, talking with a baby or child who is not yet able to speak is a great way to engage with him/her and show what communication is all about.', 
  'Singing slows down language so that the parts of each work can be heard and eventually imitated more easily by children.  Don’t worry if your singing is not perfect, children love their parents’ voices best of all!',
  'Children learn through play.  Play dough, sorting and matching, pretending, pushing toys, moving around and exploring all help a child make sense of the world around him/her as well as recognize differences.',
  'Reading and writing are closely related.  When children are allowed to scribble and make marks on paper, they are learning a valuable reading skill.  Drawing is another step in learning this skill.',
  'Nursery rhymes help a child hear letter sounds, explore rhythm, and follow the events in a story.  The rhymes also help with speaking and understanding full sentences and increase the number of words that a child knows—all in a fun way!',
  'Repeating rhymes helps a child increase memory ability and studies show that if a child can say 8-10 nursery rhymes by the time they are 4, they will become good readers.',
  'Names are the most important words for children, so begin talking about the letters in your child’s name. Make the “child’s letter” -- the first letter in their name -- special by pointing it out when you see it.',
  'Expand on things your child says. For example if your child points to a truck, you can say “Yes, that’s a truck. That’s a red fire truck.',
  'Reading to your child with excitement and enthusiasm helps make reading a special time for you and your little one. C’mon, try out some silly voices!',
  'Try retelling a favorite book with your child without looking at the book. Oral storytelling challenges children to remember events in order and builds storytelling skills.',
  'Talk with your infant or toddler like you are having a full conversation, even when they are just babbling. Ask questions and pause to let them “answer.”',
  'Incorporate writing into your child’s imaginative play. Encourage your child to write grocery lists when playing house or letters when playing mail carrier.',
  'Take a walk and encourage your child to talk about the world around them using their 5 senses. This practice can introduce new vocabulary you wouldn’t otherwise discover.',
  'Let your child explore writing materials such as crayons, chalk, and paint brushes even if they are in the scribbling stage of writing.',
  'Encourage your baby’s coos, growls, and gurgles. They are your baby’s way of communicating with you and are important first steps toward speech. The more your baby practices making sounds, the clearer they will become.',
  'Encourage your baby to pick up cereal or other small food items, press buttons on toys, and point to pictures. The muscles in those little hands will grow strong, agile, and ready to turn pages.',
  'Repetition! Read favorite stories and sing favorite songs over and over again. Repeated fun with books will strengthen a child’s language and create positive feelings about reading.',
  'Researchers estimate that less than half of children under the age of 5 are read to daily. Reading to your child from birth is one of the best ways to promote early literacy development. Just a few minutes a day makes a huge difference!',
  'Babies need more than just baby talk! Use real words and names to describe the world around you.',
  'Talk about the pictures in the book you’re reading. Introduce your child to the names of unfamiliar things.',
  'Clay and play dough can help your child develop the muscles he/she needs to write.',
  'Scribbling is an early form of writing. Let your child know that writing is important by asking what he/she has written.',
  'Bedtime is a great time for reading together but don’t limit yourself. It’s important to read together when you have time.',
  'Pay attention to your child’s current obsessions. Visit the library to find books about that subject or character.',
  'Other than reading to your child, one of the most important things you can do to encourage your child to love reading is to let them see YOU reading for pleasure.',
  'Play a rhyming game by naming a word and see if your child can name something that rhymes with it.',
  'Children’s spelling develops over time. Help your child label his/her drawings by writing the letters and talking about the sounds that they make as you do it.',
  'Want to find books your child will love? Talk to your children’s librarian! We’re here to help!',
  'Play games as you drive by picking a letter and seeing how many things you can see or words you can say that begin with that sound.',
  'Let your child choose at least some of the books you pick out when you visit the library. They’ll be much more excited to read the books they picked.',
  'Let your child choose the book you’re going to read together.',
  'Share sturdy “board books” with your infant/toddler. It’s perfectly ok when they chew on them because that’s one way they learn about books.',
  'Stuck somewhere without a book? Make up a story!',
  'Read to your baby even before it seems like he/she is listening or understanding. Your voice is helping your baby’s brain develop.',
  'Add simple labels to household items to help your child understand that spoken word and written language are connected.',
  'Take a look at the pictures before you read a book. Ask your child what they think will happen and then read the story to see if they are right.',
  'As you drive, point out and read signs together with your child.',
  'Talk to your child constantly. Studies show that children absorb much more information when spoken by a parent or loved one versus those heard on recordings like videos or CDs.',
  'Explore sound by talking to your child through a cardboard tube (like a paper towel roll) and letting your child imitate you while talking through the tube.',
  'Using toy phones, talk to your child and allow them to talk back to you. If you don’t have toy phones, improvise! Make them out of cardboard or use a wooden block.',
  'Infants can understand language long before they can speak. Talk to them and you’ll be amazed at how they can respond.',
  'Scribbling and drawing help develop fine motor skills and hand eye coordination needed to hold a pencil in school.',
  'Reading introduces children to “rare” words they may not hear in everyday conversation.',
  'Singing slows down language and helps children hear the individual sounds in words.',
  'Singing together with your child is a fun experience whether you’re a good singer or not!',
  'Incorporate nonfiction books into your reading time. They often have different vocabulary from story books.',
  'Kids love animal sounds whether they are part of a story book or you’re just looking at pictures and making the sound. So don’t be shy - moo and neigh away!',
  'Let your child turn the pages in the book.',
  'Explore different ways to sort various objects - by color, shape, type, etc.',
  'Talk to your child about shapes and then explore your house to find items that are a certain shape.',
];



