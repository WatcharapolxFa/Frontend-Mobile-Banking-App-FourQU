/* eslint-disable prettier/prettier */

import {View, Text, ScrollView} from 'react-native';

import MeterialIcons from 'react-native-vector-icons/MaterialIcons';


const Terms = ({navigation}) => {
  return (
    <View style={{height: '100%', backgroundColor: '#f3f0ea'}}>
      <View
        style={{
          height: '12%',
          backgroundColor: '#387766',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          justifyContent: 'center',
          paddingLeft: '5%',
          marginBottom: '10%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative',
          }}>
          <MeterialIcons
            name="arrow-back-ios"
            size={25}
            color="#f3f0ea"
            onPress={() => navigation.navigate('Setting')}
            backgroundColor="transparent"
            style={{
              position: 'absolute',
            }}
          />
          <Text
            style={{
              color: '#ffffff',
              fontSize: 25,
              marginLeft: 'auto',
              marginRight: 'auto',
              fontWeight: 'bold',
            }}>
            Term
          </Text>
        </View>
      </View>
      <ScrollView
        style={{
          marginLeft: '5%',
          marginBottom: '5%'
        }}>
        <Text
          style={{
            color: '#000000',
            fontSize: 12,
          }}>
          Use of this Site constitutes agreement with the following terms and
          conditions. 1. BOT maintains this web site (the "Site") as a courtesy
          to those who may choose to access the Site ("Users"). The information
          presented herein is for informative purposes only. BOT is pleased to
          allow Users to visit the Site and download and copy the information,
          documents and materials (collectively, "Materials") from the Site for
          User use subject to the terms and conditions outlined below, and also
          subject to more specific restrictions that may apply to specific
          material within this Site. 2. Unless expressly stated otherwise, the
          findings interpretations and conclusions expressed in the Materials in
          this Site are those of the various authors of the work and are not
          necessarily those of BOT. Condition of use 3. Information is obtained
          from sources believed to be relieable. BOT does not warrant its
          completeness or accuracy for merchantability, fitness for a particular
          purpose. The information may be subject to change at anytime without
          notice. Any person wishing to obtain further clarification should do
          so only with a formal consultation with relevant authorities. Under no
          circumstances shall BOT be liable for any loss, damage, liability or
          expense incurred or suffered which is claimed to resulted from use of
          this Site, Including without limitation, any fault, error, omission,
          interruption or delay with respect thereto. Under no circumstances,
          including, but not limited to, negligence, shall BOT be liable for any
          direct, indirect, incidental, special or consequential damages, even
          if BOT has been advised of the possibility of such damages. 4. User
          specifically acknowledges and agrees that BOT is not liable for any
          conduct of any User. 5. This site may contain advice, opinions, and
          statements of various information providers and content providers. BOT
          does not represent or endorse the accuracy or reliability of any
          advice, opinion, statement or other information provided by any
          information provider or content provider, or any user of this site or
          other person or entity. Reliance upon any such opinion, advice,
          statement, or other information shall also be at your own risk.
          Neither BOT nor employees shall be liable to any User or anyone else
          for any inaccuracy, error, omission, interruption, timeliness,
          completeness, deletion, defect, failure of performance, computer
          virus, communication line failure, alteration of, or use of any
          content herein, regardless of cause, for any damages resulting
          therefrom. 6. As a condition of use of this Site, User agrees to
          indemnify BOT from and against any and all actions, claims, losses,
          damages, liabilities and expenses (including reasonable attorneys'
          fees) arising out User's use of this Site, including without
          limitation any claims alleging facts that if true would constitute a
          breach by User of these terms and conditions. If User is dissatisfied
          with any material on this Site or with any of terms and conditions of
          use of this Site, User's sole and exclusive remedy is to discontinue
          using this Site. 7. Nothing in this Site or any Materials shall be
          construed, implicitly or explicitly, as containing any investment
          recommendations. Links to third-party websites 8. This Site contains
          links to third-party web sites. The linked sites are not under the
          control of BOT and BOT is not responsible for the contents of any
          linked site or any link contained in a linked site. BOT provides these
          links only as a convenience, and the inclusion of a link does not
          imply endorsement of the linked site by BOT. These sites may contain
          information that is copyrighted with restrictions on reuse. Permission
          to use copyrighted materials must be obtained form the original
          source. Applicable Law and Jurisdiction 9. This Agreement will be
          interpreted and enforced in accordance with the laws of Thailand.
          General 10. BOT reserves its exclusive right in its sole discretion to
          alter, limit or discontinue the site or any Materials in any respect.
          BOT shall have no obligation to take the needs of any user into
          consideration in connection therewith. 11. BOT reserves the right to
          deny in its sole discretion any user access to this Site or any
          portion thereof without notice. 12. No waiver by BOT of any provision
          of this Agreement shall be binding except as set forth in a writing
          signed by its duly authorized representative.
        </Text>
      </ScrollView>
    </View>
  );
};

export default Terms;
